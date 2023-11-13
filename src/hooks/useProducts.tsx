import { useState, useEffect } from 'react'
import { getProducts } from '../firebase/firebase-firestore'
import { IProduct } from '../compiler/productInterface'

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
  }, [])

  return products
}
