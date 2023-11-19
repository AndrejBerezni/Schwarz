import { IReviewsProps } from '..'
import { PrimaryButton } from '../../../GlobalStyles'
import {
  StyledAddReviewForm,
  ReviewsTitle,
  ReviewTextarea,
  ReviewInput,
} from '../Reviews.styles'

export default function AddReviews({ product }: Readonly<IReviewsProps>) {
  return (
    <StyledAddReviewForm>
      <ReviewsTitle>Add review for {product.name}</ReviewsTitle>
      <ReviewInput type="text" placeholder="Your name goes here..." required />
      <ReviewTextarea
        placeholder="Your review goes here..."
        rows={10}
        required
      />
      <PrimaryButton type="submit">Submit</PrimaryButton>
    </StyledAddReviewForm>
  )
}
