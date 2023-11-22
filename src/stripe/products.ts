import { stripeClient } from './stripe-config'

export const getAllStripeProducts = async () => {
  try {
    const productsResponse = await stripeClient.products.list({ limit: 10 })
    console.log(productsResponse.data)
    return productsResponse.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
