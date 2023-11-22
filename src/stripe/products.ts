import { stripeClient } from './stripe-config'

export const getAllStripeProducts = async () => {
  try {
    const productsResponse = await stripeClient.products.list({ limit: 20 })
    return productsResponse.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
