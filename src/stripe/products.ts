import Stripe from 'stripe'
import { stripeClient } from './stripe-config'
import { IPrice, IProductUpdate } from '../compiler/productInterface'

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

export const updateProduct = async (
  update: IProductUpdate,
  initialPrice: IPrice,
  initialDiscountPrice?: IPrice
) => {
  try {
    await stripeClient.products.update(update.docId, {
      name: update.name,
      description: update.description,
      metadata: {
        brand: update.brand,
        collection: update.collection,
        discount: update.discount,
        new: update.new,
        material: update.material,
      },
      images: [update.imageUrl],
    })
    // Since Stripe API requires creating new price and does not allow updating old one,
    // we are first checking if changes were made, not to create new price for nothing
    if (initialPrice.unit_amount !== update.priceAmount * 100) {
      const newPrice = await stripeClient.prices.create({
        unit_amount: update.priceAmount * 100,
        currency: 'eur',
        product: update.docId,
      })
      await stripeClient.products.update(update.docId, {
        default_price: newPrice.id,
      })
      await stripeClient.prices.update(initialPrice.priceId, { active: false })
    }
    //Handle discount price
    if (
      update.discount === '1' &&
      update.discountPriceAmount &&
      update.discountPriceLabel
    ) {
      //Case when discount price already existed and was changed
      if (
        initialDiscountPrice &&
        update.discountPriceId !== null &&
        initialDiscountPrice.unit_amount !==
          Number(update.discountPriceAmount) * 100
      ) {
        await stripeClient.prices.create({
          unit_amount: Number(update.discountPriceAmount) * 100,
          currency: 'eur',
          product: update.docId,
          nickname: update.discountPriceLabel,
        })
        await stripeClient.prices.update(initialDiscountPrice.priceId, {
          active: false,
        })
      } else if (!initialDiscountPrice) {
        console.log('trying to create new one')
        //case if we are setting up discount now and it never existed
        await stripeClient.prices.create({
          unit_amount: Number(update.discountPriceAmount) * 100,
          currency: 'eur',
          product: update.docId,
          nickname: update.discountPriceLabel,
        })
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
