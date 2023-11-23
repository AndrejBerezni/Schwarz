import { useEffect, useState } from 'react'
import { IoReloadOutline } from 'react-icons/io5'
import Stripe from 'stripe'
import { PrimaryButton } from '../../../../GlobalStyles'
import { AdminLoadButton } from '../../../../pages/Admin/Admin.styles'
import { getStripeProducts } from '../../../../stripe/products'
import AdminProductCard from '../AdminProductCard'
import { AdminProductsContainer } from '../AdminProducts.styles'

export default function AdminProductsList() {
  const [stripeProducts, setStripeProducts] = useState<Stripe.Product[]>([])
  const [allProductsShown, setAllProductsShown] = useState<boolean>(false)

  useEffect(() => {
    const fetchStripeProducts = async () => {
      const fetchedProducts: Stripe.Product[] | undefined =
        await getStripeProducts()
      if (fetchedProducts) {
        fetchedProducts
        setStripeProducts(fetchedProducts)
      }
    }

    fetchStripeProducts()
  }, [])

  const loadMoreProducts = async () => {
    const lastProduct: string = stripeProducts[stripeProducts.length - 1].id
    const newProducts: Stripe.Product[] | undefined =
      await getStripeProducts(lastProduct)
    if (newProducts) {
      if (newProducts.length < 10) {
        setAllProductsShown(true)
      }
      setStripeProducts((prev) => [...prev, ...newProducts])
    }
  }

  const showLessProducts = async () => {
    const newProducts: Stripe.Product[] | undefined = await getStripeProducts()
    if (newProducts) {
      setAllProductsShown(false)
      setStripeProducts(newProducts)
    }
  }

  return (
    <>
      <PrimaryButton variant="outline">Add new product</PrimaryButton>
      <AdminProductsContainer>
        {stripeProducts.map((product) => (
          <AdminProductCard product={product} key={`${product.id}-apc`} />
        ))}
      </AdminProductsContainer>
      {allProductsShown ? (
        <AdminLoadButton onClick={showLessProducts}>Show less</AdminLoadButton>
      ) : (
        <AdminLoadButton onClick={loadMoreProducts}>
          Load more
          <IoReloadOutline />
        </AdminLoadButton>
      )}
    </>
  )
}
