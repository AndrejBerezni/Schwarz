import { GoStarFill } from 'react-icons/go'
import {
  StyledReviewCard,
  ReviewCardText,
  ReviewCardUsername,
} from './ReviewCard.styles'
import { IReview } from '../../../compiler/reviewInterface'
import { StarInputContainer } from '../StarRating/StartRating.styles'

interface IReviewCardProps {
  review: IReview
}

export default function ReviewCard({ review }: Readonly<IReviewCardProps>) {
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < rating; i++) {
      stars.push(<GoStarFill key={`${i}-${review.userId}`} />)
    }
    return stars
  }
  return (
    <StyledReviewCard>
      <StarInputContainer>{renderStars(review.rating)}</StarInputContainer>
      <ReviewCardText>' {review.reviewText} '</ReviewCardText>
      <ReviewCardUsername>{review.username}</ReviewCardUsername>
    </StyledReviewCard>
  )
}
