import { AdminTitle } from '../../../pages/Admin/Admin.styles'
import { useEffect, useState } from 'react'
import { getAllStripeProducts } from '../../../stripe/products'
import Stripe from 'stripe'

export default function AdminProducts() {
  const [stripeProducts, setStripeProducts] = useState<Stripe.Product[]>([])

  useEffect(() => {
    const fetchStripeProducts = async () => {
      const fetchedProducts: Stripe.Product[] | undefined =
        await getAllStripeProducts()
      if (fetchedProducts) {
        console.log(fetchedProducts)
        setStripeProducts(fetchedProducts)
      }
    }

    fetchStripeProducts()
  }, [])

  return <AdminTitle>Products</AdminTitle>
}
