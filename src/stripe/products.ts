import Stripe from 'stripe'
import { stripeClient } from './stripe-config'

export const getStripeProducts = async (startAfter?: string) => {
  try {
    const productsResponse = await stripeClient.products.list({
      limit: 10,
      starting_after: startAfter,
    })
    return productsResponse.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

export const retrieveStripeProduct = async (productId: string) => {
  try {
    const product: Stripe.Product =
      await stripeClient.products.retrieve(productId)
    return product
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
