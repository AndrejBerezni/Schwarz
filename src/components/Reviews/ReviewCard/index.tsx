import { StyledReviewCard } from './ReviewCard.styles'
import { IReview } from '../../../compiler/reviewInterface'

interface IReviewCardProps {
  review: IReview
}

export default function ReviewCard({ review }: Readonly<IReviewCardProps>) {
  return (
    <StyledReviewCard>
      <h4>
        {review.username} - {review.rating}
      </h4>
      <p>{review.reviewText}</p>
    </StyledReviewCard>
  )
}
