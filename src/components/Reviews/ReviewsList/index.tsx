import { IReviewsProps } from '..'
import { StyledReviewsList, ReviewsTitle } from '../Reviews.styles'

export default function ReviewsList({ product }: Readonly<IReviewsProps>) {
  return (
    <StyledReviewsList>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <li>{product.name}</li>
      <li>review12</li>
      <li>review13</li>
      <li>review41</li>
    </StyledReviewsList>
  )
}
