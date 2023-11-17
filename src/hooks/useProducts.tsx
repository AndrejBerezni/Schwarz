import { useState, useEffect } from 'react'
import { IProduct } from '../compiler/productInterface'
import { getProducts } from '../firebase/firebase-firestore'
import { useSelector } from 'react-redux'
import { getFilters } from '../store/filter/selectors'
import { IFilterState } from '../store/filter'
import { filterProducts } from '../utilities/filterProducts'

interface IuseProductsProps {
  metadataProp: string
  metadataCriteria: string
}

export default function useProducts({
  metadataProp,
  metadataCriteria,
}: Readonly<IuseProductsProps>) {
  const [products, setProducts] = useState<IProduct[]>([])
  const filters: IFilterState = useSelector(getFilters)

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts = await getProducts(metadataProp, metadataCriteria)
      const filteredProducts = filterProducts(newProducts, filters)
      setProducts(filteredProducts)
    }

    fetchProducts()
  }, [metadataProp, metadataCriteria, filters])

  return products
}
