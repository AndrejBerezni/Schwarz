import { ICartItem } from '../compiler/cartItemInterface'

export const calculateTotalPrice = (items: ICartItem[]): number =>
  items.reduce((acc: number, item: ICartItem) => acc + item.totalPrice, 0)

export const calculateTotalItems = (items: ICartItem[]): number =>
  items.reduce((acc: number, item: ICartItem) => acc + item.count, 0)
