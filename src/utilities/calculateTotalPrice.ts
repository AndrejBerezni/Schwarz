import { ICartItem } from '../compiler/cartItemInterface'

export const calculateTotalPrice = (items: ICartItem[]): number =>
  items.reduce((acc: number, item: ICartItem) => acc + item.totalPrice, 0)
