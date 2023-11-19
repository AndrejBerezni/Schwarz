import { IReviewsProps } from '..'
import { StyledReviewsList, ReviewsTitle } from '../Reviews.styles'
import { getProductReviews } from '../../../firebase/firebase-firestore'
import { IReview } from '../../../compiler/reviewInterface'
import { useState, useEffect } from 'react'
import Spinner from '../../Spinner'

export default function ReviewsList({ product }: Readonly<IReviewsProps>) {
  const [reviews, setReviews] = useState<IReview[] | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getProductReviews(product.docId)
      setReviews(fetchedReviews)
    }
    fetchReviews()
  }, [])

  return (
    <StyledReviewsList>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {reviews === null ? (
        <Spinner />
      ) : reviews.length === 0 ? (
        <h3>Product has no reviews added yet</h3>
      ) : (
        reviews.map((review: IReview) => (
          <li>
            <p>{review.rating}</p>
            <p>{review.reviewText}</p>
            <p>{review.username}</p>
          </li>
        ))
      )}
    </StyledReviewsList>
  )
}
