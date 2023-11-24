import Stripe from 'stripe'
import { stripeClient } from './stripe-config'
import { formatPrice } from '../utilities/formatPrice'

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
export const getPayments = async (startAfter?: string) => {
  const payments = await stripeClient.paymentIntents.list({
    limit: 10,
    starting_after: startAfter,
  })

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
          date: paymentDate.toLocaleString('en-US'),
        }
      } else {
        return {
          orderId: item.id,
          amount: item.amount,
          currency: item.currency,
          status: item.status,
          customer: 'Unknown',
          date: paymentDate.toLocaleString('en-US'),
        }
      }
    })
  )
  return paymentDetails
}

//Return sum of successfull payments or number of sales for certain period
export const getSuccessfulPaymentsSum = async (
  period: 'month' | 'week' | 'day',
  returnInformation: 'balance' | 'sales'
) => {
  // Get the current date
  const currentDate = new Date()

  // Set the start and end dates according to argument passed
  let startDate
  let endDate

  if (period === 'month') {
    startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  } else if (period === 'week') {
    const currentDay = currentDate.getDay()
    startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDay
    )
    endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + (6 - currentDay)
    )
  } else if (period === 'day') {
    startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
    endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    )
  } else {
    throw new Error('Invalid period. Please use "month", "week", or "day".')
  }

  // Convert dates to Unix timestamps
  const startTimestamp = Math.floor(startDate.getTime() / 1000)
  const endTimestamp = Math.floor(endDate.getTime() / 1000)

  const allPayments = await stripeClient.paymentIntents.list({
    created: {
      gte: startTimestamp,
      lte: endTimestamp,
    },
  })

  const successfulPayments = allPayments.data.filter(
    (payment: Stripe.PaymentIntent) => payment.status === 'succeeded'
  )

  if (returnInformation === 'balance') {
    const sum = successfulPayments.reduce((acc, item) => acc + item.amount, 0)
    return formatPrice(sum / 100)
  } else if (returnInformation === 'sales') {
    return successfulPayments.length.toString()
  }
}
