import { ICartItem, ILineItem } from '../compiler/cartItemInterface'
import { loadStripe } from '@stripe/stripe-js'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/firebase-firestore'

export const createCheckout = async (items: ICartItem[], userId: string) => {
  const line_items: ILineItem[] = items.map((item: ICartItem) => ({
    price: item.priceId,
    quantity: item.count,
  }))

  try {
    const docRef = await addDoc(
      collection(db, `customers/${userId}/checkout_sessions`),
      {
        mode: 'payment',
        line_items,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    )
    await onSnapshot(docRef, async (snap) => {
      const data = snap.data() as { error: string; sessionId: string }
      const { error, sessionId } = data
      if (error) {
        throw new Error('Creating session failed')
      }
      if (sessionId) {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)
        stripe!.redirectToCheckout({ sessionId })
      }
    })
  } catch (error) {
    throw new Error('Creating session failed')
  }
}
