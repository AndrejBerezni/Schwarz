import { IProduct } from '../compiler/productInterface'
import { IFilterState } from '../store/filter'

// Inside brackets, we need one of the conditions to be true - either the filter is off or product has appropriate metadata

export const filterProducts = (products: IProduct[], filters: IFilterState) => {
  return products.filter((item) => {
    return (
      (filters.men === false || item.metadata.collection === 'men') &&
      (filters.women === false || item.metadata.collection === 'women') &&
      (filters.discount === false || item.metadata.discount === '1') &&
      (filters.new === false || item.metadata.new === '1')
    )
  })
}
