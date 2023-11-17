import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IProduct } from '../compiler/productInterface'
import { getProducts } from '../firebase/firebase-firestore'
import { IFilterState } from '../store/filter'
import { getFilters } from '../store/filter/selectors'
import { filterProducts } from '../utilities/filterProducts'

interface IuseProductsProps {
  metadataProp: string
  metadataCriteria: string
  applyListFilters: boolean
}

export default function useProducts({
  metadataProp,
  metadataCriteria,
  applyListFilters,
}: Readonly<IuseProductsProps>) {
  const [products, setProducts] = useState<IProduct[]>([])
  const filters: IFilterState = useSelector(getFilters)

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts = await getProducts(metadataProp, metadataCriteria)
      if (applyListFilters) {
        const filteredProducts = filterProducts(newProducts, filters)
        setProducts(filteredProducts)
      } else {
        setProducts(newProducts)
      }
    }
    setProducts([])
    fetchProducts()
  }, [metadataProp, metadataCriteria, filters])
  //since this function is used to get data for carousel, carousel will also reload when you are filtering products
  //check if you can handle it differently, maybe write separate hook for fetching carousel products

  return products
}
