import { useState, MouseEvent, FormEvent, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IProduct } from '../../../compiler/productInterface'
import { IReview } from '../../../compiler/reviewInterface'
import { addProductReview } from '../../../firebase/firebase-firestore'
import { PrimaryButton } from '../../../GlobalStyles'
import { displayAlert } from '../../../store/alert'
import { getShowAlert, getAlert } from '../../../store/alert/selectors'
import { showForm } from '../../../store/authentication'
import { getUser, getAuthStatus } from '../../../store/authentication/selectors'
import AlertMessage from '../../AlertMessage'
import {
  StyledAddReviewForm,
  ReviewsTitle,
  ReviewTextarea,
  ReviewInput,
} from '../Reviews.styles'
import StarRating from '../StarRating'

interface IAddReviewProps {
  product: IProduct
  refreshReviews: () => void
}

export default function AddReviews({
  product,
  refreshReviews,
}: Readonly<IAddReviewProps>) {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isAuth = useSelector(getAuthStatus)

  const [rating, setRating] = useState<number>(1)
  const reviewTextRef = useRef<HTMLTextAreaElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)

  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

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
      refreshReviews()
      dispatch(
        displayAlert({
          type: 'review',
          message: 'Review submitted!',
        })
      )
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
      {!user.isAdmin && <PrimaryButton type="submit">Submit</PrimaryButton>}
      {showAlert && alert.type === 'review' && <AlertMessage />}
    </StyledAddReviewForm>
  )
}
