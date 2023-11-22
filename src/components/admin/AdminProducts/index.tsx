import { useEffect, useState } from 'react'
import { IoReloadOutline } from 'react-icons/io5'
import Stripe from 'stripe'
import AdminProductCard from './AdminProductCard'
import { AdminProductsContainer } from './AdminProducts.styles'
import { PrimaryButton } from '../../../GlobalStyles'
import { AdminLoadButton, AdminTitle } from '../../../pages/Admin/Admin.styles'
import { getAllStripeProducts } from '../../../stripe/products'

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

  return (
    <>
      <AdminTitle>Products</AdminTitle>
      <PrimaryButton variant="outline">Add new product</PrimaryButton>
      <AdminProductsContainer>
        {stripeProducts.map((product) => (
          <AdminProductCard product={product} />
        ))}
      </AdminProductsContainer>
      <AdminLoadButton>
        Load more
        <IoReloadOutline />
      </AdminLoadButton>
    </>
  )
}
