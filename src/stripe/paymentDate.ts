import Stripe from 'stripe'
const stripeClient = new Stripe(import.meta.env.VITE_STRIPE_SECRET)

//options to format the date
const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
}

export const getPaymentDate = async (
  paymentIntentId: string
): Promise<string | null> => {
  try {
    const paymentIntent =
      await stripeClient.paymentIntents.retrieve(paymentIntentId)
    const paymentDate = new Date(paymentIntent.created * 1000) // convert seconds to milliseconds
    return paymentDate.toLocaleString('en-US', options)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
    return null
  }
}
