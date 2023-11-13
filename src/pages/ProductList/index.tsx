import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import { ProductsContainer } from './ProductList.styles'
import { convertBrandString } from '../../utilities/convertBrandString'
import useProducts from '../../hooks/useProducts'

const categories = [
  'cartier',
  'patek_philippe',
  'vacheron_constantine',
  'rolex',
  'ulysee_nardin',
]

export default function ProductList() {
  const { category } = useParams()
  const brand = convertBrandString(category!)
  const products = useProducts({
    metadataProp: 'brand',
    metadataCriteria: brand,
  })

  return (
    <>
      {categories.includes(category as string) ? (
        <div>
          <h1>{category}</h1>
          <ProductsContainer></ProductsContainer>
        </div>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
