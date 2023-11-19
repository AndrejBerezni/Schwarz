import { useState } from 'react'
import AddReview from './AddReviewForm'
import { StyledReviews } from './Reviews.styles'
import ReviewsList from './ReviewsList'
import { IProduct } from '../../compiler/productInterface'

export interface IReviewsProps {
  product: IProduct
}

export default function Reviews({ product }: Readonly<IReviewsProps>) {
  const [refreshReviews, setRefreshReviews] = useState<boolean>(false)

  const handleRefresh = () => {
    setRefreshReviews((prev) => !prev)
  }

  return (
    <StyledReviews>
      <AddReview product={product} refreshReviews={handleRefresh} />
      <ReviewsList product={product} reviewsRefreshed={refreshReviews} />
    </StyledReviews>
  )
}
