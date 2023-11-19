import AddReviews from './AddReviewForm'
import { StyledReviews } from './Reviews.styles'
import ReviewsList from './ReviewsList'
import { IProduct } from '../../compiler/productInterface'

export interface IReviewsProps {
  product: IProduct
}

export default function Reviews({ product }: Readonly<IReviewsProps>) {
  return (
    <StyledReviews>
      <AddReviews product={product} />
      <ReviewsList product={product} />
    </StyledReviews>
  )
}
