import { useState, useEffect } from 'react'
import { IProduct } from '../compiler/productInterface'
import { getProducts } from '../firebase/firebase-firestore'

interface IuseProductsProps {
  metadataProp: string
  metadataCriteria: string
}

export default function useProducts({
  metadataProp,
  metadataCriteria,
}: Readonly<IuseProductsProps>) {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts = await getProducts(metadataProp, metadataCriteria)
      setProducts(newProducts)
    }

    fetchProducts()
  }, [metadataProp, metadataCriteria])

  return products
}
