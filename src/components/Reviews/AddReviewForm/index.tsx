import { useState, MouseEvent, FormEvent, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IReviewsProps } from '..'
import { IReview } from '../../../compiler/reviewInterface'
import { addProductReview } from '../../../firebase/firebase-firestore'
import { PrimaryButton } from '../../../GlobalStyles'
import { showForm } from '../../../store/authentication'
import { getUser, getAuthStatus } from '../../../store/authentication/selectors'
import {
  StyledAddReviewForm,
  ReviewsTitle,
  ReviewTextarea,
  ReviewInput,
} from '../Reviews.styles'
import StarRating from '../StarRating'

export default function AddReviews({ product }: Readonly<IReviewsProps>) {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isAuth = useSelector(getAuthStatus)
  const [rating, setRating] = useState<number>(1)
  const reviewTextRef = useRef<HTMLTextAreaElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)

  const handleRatingClick = (event: MouseEvent, ratingValue: number) => {
    event.preventDefault()
    setRating(ratingValue)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!isAuth) {
      dispatch(showForm('signIn'))
      return
    }
    if (reviewTextRef.current && usernameRef.current) {
      const newReview: IReview = {
        username: usernameRef.current.value,
        reviewText: reviewTextRef.current.value,
        rating,
        userId: user.uid,
      }
      await addProductReview(newReview, product.docId)
      usernameRef.current.value = ''
      reviewTextRef.current.value = ''
      setRating(1)
    }
  }

  return (
    <StyledAddReviewForm onSubmit={handleSubmit}>
      <ReviewsTitle>Add review for {product.name}</ReviewsTitle>
      <StarRating handleClick={handleRatingClick} rating={rating} />
      <ReviewInput
        type="text"
        placeholder="Your name goes here..."
        required
        ref={usernameRef}
      />
      <ReviewTextarea
        placeholder="Your review goes here... ( max 400 characters )"
        rows={10}
        maxLength={400}
        required
        ref={reviewTextRef}
      />
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </StyledAddReviewForm>
  )
}
