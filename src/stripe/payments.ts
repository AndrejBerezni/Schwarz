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

// Get payments for Admin page
export const getPayments = async () => {
  const payments = await stripeClient.paymentIntents.list()

  const paymentDetails = await Promise.all(
    payments.data.map(async (item) => {
      const paymentDate = new Date(item.created * 1000)
      const customerResponse = await stripeClient.customers.retrieve(
        item.customer as string
      )
      // Check if the response is a Customer
      if (customerResponse.object === 'customer') {
        const customer = customerResponse as Stripe.Customer
        return {
          orderId: item.id,
          amount: item.amount,
          currency: item.currency,
          status: item.status,
          customer: customer.email,
          date: paymentDate.toLocaleString('en-US', options),
        }
      } else {
        return {
          orderId: item.id,
          amount: item.amount,
          currency: item.currency,
          status: item.status,
          customer: 'Unknown',
          date: paymentDate.toLocaleString('en-US', options),
        }
      }
    })
  )
  console.log(paymentDetails)
  return paymentDetails
}
