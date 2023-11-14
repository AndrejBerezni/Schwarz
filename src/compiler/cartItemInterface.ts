export interface ICartItem {
  id: string
  name: string
  price: number
  totalPrice: number
  priceId: string
  count: number
  image: string
}

export interface ILineItem {
  price: string
  quantity: number
}
