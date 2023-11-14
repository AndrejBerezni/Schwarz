import { get } from 'lodash'
import { RootState } from '..'

export const getCart = (store: RootState) => get(store, 'cart', [])
