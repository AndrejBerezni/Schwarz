import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Stripe from 'stripe'
import { AdminSubtitle } from '../../../../pages/Admin/Admin.styles'
import { retrieveStripeProduct } from '../../../../stripe/products'

export default function AdminProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState<Stripe.Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const currentProduct = await retrieveStripeProduct(productId!)
        if (currentProduct) {
          setProduct(currentProduct)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    }
    fetchProduct()
  }, [productId])

  return <>{product && <AdminSubtitle>{product.name}</AdminSubtitle>}</>
}
