import { useState, useEffect } from 'react'
import { IProduct } from '../compiler/productInterface'
import { getAllProducts } from '../firebase/firebase-firestore'

interface IuseProductsProps {
  metadataProp: string
  metadataCriteria: string
  exclude: string
}

export default function useCarouselProducts({
  metadataProp,
  metadataCriteria,
  exclude,
}: Readonly<IuseProductsProps>) {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts = await getAllProducts(
        metadataProp,
        metadataCriteria,
        15
      )
      setProducts(newProducts.filter((item) => item.docId !== exclude))
    }

    fetchProducts()
  }, [metadataProp, metadataCriteria, exclude])

  return products
}

//I have separate hooks for fetching products for product list and for carousel
//for two reasons:
// 1. I am implementing infinite scroll and for product list I don't want to fetch all products at once
// 2. Products on product list are going through filtering and when filters change, component rerenders - I didn't want carousel to rerender
// as well when filters are changed
