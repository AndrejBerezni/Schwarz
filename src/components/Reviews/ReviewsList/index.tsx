import { useState, useEffect } from 'react'
import { GoStarFill } from 'react-icons/go'
import { IProduct } from '../../../compiler/productInterface'
import { IReview } from '../../../compiler/reviewInterface'
import { getProductReviews } from '../../../firebase/firebase-firestore'
import { calculateAverageRating } from '../../../utilities/calculateAverageRating'
import Spinner from '../../Spinner'
import ReviewCard from '../ReviewCard'
import {
  StyledReviewsList,
  ReviewsTitle,
  ReviewsTitleStar,
} from '../Reviews.styles'

interface IReviewsListProps {
  product: IProduct
  reviewsRefreshed: boolean
}

export default function ReviewsList({
  product,
  reviewsRefreshed,
}: Readonly<IReviewsListProps>) {
  const [reviews, setReviews] = useState<IReview[] | null>(null)
  const [productRating, setProductRating] = useState<string>('')

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getProductReviews(product.docId)
      const rating = calculateAverageRating(fetchedReviews)
      setProductRating(rating)
      setReviews(fetchedReviews)
    }
    fetchReviews()
  }, [product.docId, reviewsRefreshed])

  return (
    <StyledReviewsList>
      {reviews !== null && reviews.length > 0 ? (
        <ReviewsTitle>
          Reviews{` (${reviews.length}) - `}
          {productRating}
          <ReviewsTitleStar>
            <GoStarFill />
          </ReviewsTitleStar>
        </ReviewsTitle>
      ) : (
        <ReviewsTitle>Reviews</ReviewsTitle>
      )}
      {reviews === null ? (
        <Spinner />
      ) : reviews.length === 0 ? (
        <h3>Product has no reviews added yet</h3>
      ) : (
        reviews.map((review: IReview) => (
          <ReviewCard review={review} key={`${review.userId}-review`} />
        ))
      )}
    </StyledReviewsList>
  )
}
