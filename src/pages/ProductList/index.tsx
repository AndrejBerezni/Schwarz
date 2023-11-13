import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import {
  StyledProductList,
  ProductsContainer,
  ProductsTitle,
  ProductsHeader,
} from './ProductList.styles'
import ProductCard from '../../components/ProductCard'
import Spinner from '../../components/Spinner'
import useProducts from '../../hooks/useProducts'
import { convertBrandString } from '../../utilities/convertBrandString'

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
        <StyledProductList>
          <ProductsHeader>
            <ProductsTitle>{brand}</ProductsTitle>
            <p>filters to go here...</p>
          </ProductsHeader>

          <ProductsContainer>
            {products.length === 0 ? (
              <Spinner />
            ) : (
              products.map((item) => (
                <ProductCard key={`${item.docId}p`} product={item} />
              ))
            )}
          </ProductsContainer>
        </StyledProductList>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
