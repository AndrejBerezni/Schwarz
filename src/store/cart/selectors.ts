import { get } from 'lodash'
import { RootState } from '..'

export const getCartItems = (store: RootState) => get(store, 'cart.items', [])
export const getTotalPrice = (store: RootState) => get(store, 'cart.total', 0)
