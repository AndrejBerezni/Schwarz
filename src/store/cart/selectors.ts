import { get } from 'lodash'
import { RootState } from '..'

export const getCartItems = (store: RootState) => get(store, 'cart', [])
