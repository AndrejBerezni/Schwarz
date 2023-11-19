import { useState, MouseEvent } from 'react'
import { IReviewsProps } from '..'
import { PrimaryButton } from '../../../GlobalStyles'
import {
  StyledAddReviewForm,
  ReviewsTitle,
  ReviewTextarea,
  ReviewInput,
} from '../Reviews.styles'
import StarRating from '../StarRating'

export default function AddReviews({ product }: Readonly<IReviewsProps>) {
  const [rating, setRating] = useState<number>(1)

  const handleRatingClick = (event: MouseEvent, ratingValue: number) => {
    event.preventDefault()
    setRating(ratingValue)
  }

  return (
    <StyledAddReviewForm>
      <ReviewsTitle>Add review for {product.name}</ReviewsTitle>
      <StarRating handleClick={handleRatingClick} rating={rating} />
      <ReviewInput type="text" placeholder="Your name goes here..." required />
      <ReviewTextarea
        placeholder="Your review goes here... ( max 400 characters )"
        rows={10}
        maxLength={400}
        required
      />
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </StyledAddReviewForm>
  )
}
