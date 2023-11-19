import { IReview } from '../compiler/reviewInterface'

export const calculateAverageRating = (reviews: IReview[]) =>
  (
    reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length
  ).toFixed(1)
