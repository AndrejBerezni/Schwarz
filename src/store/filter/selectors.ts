import { get } from 'lodash'
import { RootState } from '..'

export const getFilters = (store: RootState) =>
  get(store, 'filter', {
    men: false,
    women: false,
    discount: false,
    new: false,
  })
