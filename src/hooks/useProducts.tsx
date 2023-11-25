import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IProduct } from '../compiler/productInterface'
import { getAllProducts } from '../firebase/firebase-firestore'
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
  const [products, setProducts] = useState<IProduct[] | null>([])
  const filters: IFilterState = useSelector(getFilters)
  const [lastProduct, setLastProduct] = useState<string>('')
  const [allProductsLoaded, setAllProductsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(null) //adding this to start Spinner when filters are changed, while waiting for new results - otherwise screen would display old results until new ones are fetched and user would not know what is going on
      setAllProductsLoaded(false)
      const newProducts = await getAllProducts(metadataProp, metadataCriteria)
      if (applyListFilters) {
        const filteredProducts = filterProducts(newProducts, filters)
        setProducts(filteredProducts)
      } else {
        setProducts(newProducts)
      }
      // accessing last updated state (using only setLastProduct would not access updated state)
      setProducts((prevProducts) => {
        if (prevProducts) {
          if (prevProducts.length > 0) {
            setLastProduct(prevProducts[prevProducts.length - 1].docId)
          }
          if (prevProducts.length < 6) {
            setAllProductsLoaded(true)
          }
        }
        return prevProducts
      })
    }
    fetchProducts()
  }, [metadataProp, metadataCriteria, filters, applyListFilters])

  const loadMore = async () => {
    const newProducts = await getAllProducts(
      metadataProp,
      metadataCriteria,
      lastProduct
    )
    if (applyListFilters) {
      const filteredProducts = filterProducts(newProducts, filters)
      if (filteredProducts.length < 6) {
        setAllProductsLoaded(true)
      }
      setProducts((prev) => [...(prev ?? []), ...filteredProducts])
    } else {
      if (newProducts.length < 6) {
        setAllProductsLoaded(true)
      }
      setProducts((prev) => [...(prev ?? []), ...newProducts])
    }
    setProducts((prevProducts) => {
      if (prevProducts && prevProducts.length > 0) {
        setLastProduct(prevProducts[prevProducts.length - 1].docId)
      }
      return prevProducts
    })
  }

  return { products, loadMore, allProductsLoaded }
}
