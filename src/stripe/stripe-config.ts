import Stripe from 'stripe'
export const stripeClient = new Stripe(import.meta.env.VITE_STRIPE_SECRET)
