import { ICartItem } from '../compiler/cartItemInterface'
import { IProduct } from '../compiler/productInterface'

export const convertProductToCartItem = (
  product: IProduct,
  amount: number
): ICartItem => {
  const price =
    product.prices[parseInt(product.metadata.discount)].unit_amount / 100
  const totalPrice = Math.round(amount * price * 100) / 100
  const cartItem: ICartItem = {
    id: product.docId,
    name: product.name,
    price,
    totalPrice,
    priceId: product.prices[parseInt(product.metadata.discount)].priceId,
    count: amount,
    image: product.images[0],
  }
  return cartItem
}
