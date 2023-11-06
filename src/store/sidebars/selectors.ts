import { get } from 'lodash'
import { RootState } from '..'

export const getShowCart = (store: RootState) =>
  get(store, 'sidebars.cart', false)

export const getShowCategories = (store: RootState) =>
  get(store, 'sidebars.categories', false)
