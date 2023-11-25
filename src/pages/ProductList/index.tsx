import { useParams } from 'react-router'
import { Navigate } from 'react-router-dom'
import {
  StyledProductList,
  ProductsContainer,
  ProductsTitle,
  ProductsHeader,
} from './ProductList.styles'
import Filters from '../../components/Filters'
import ProductCard from '../../components/ProductCard'
import Spinner from '../../components/Spinner'
import { categories } from '../../data/categories'
import useProducts from '../../hooks/useProducts'
import { convertBrandString } from '../../utilities/convertBrandString'
import { PrimaryButton } from '../../GlobalStyles'

export default function ProductList() {
  const { category } = useParams()
  const brand = convertBrandString(category!)
  const { products, loadMore } = useProducts({
    metadataProp: 'brand',
    metadataCriteria: brand,
    applyListFilters: true,
  })

  return (
    <>
      {categories.includes(category as string) ? (
        <StyledProductList>
          <ProductsHeader>
            <ProductsTitle>
              {brand === 'all' ? 'Schwarz Catalogue' : brand}
            </ProductsTitle>
            <Filters />
          </ProductsHeader>
          <ProductsContainer>
            {products === null ? (
              <Spinner />
            ) : products.length === 0 ? (
              <h4>No products to show</h4>
            ) : (
              products.map((item) => (
                <ProductCard key={`${item.docId}p`} product={item} />
              ))
            )}
          </ProductsContainer>
          <PrimaryButton variant="outline" onClick={loadMore}>
            Load more
          </PrimaryButton>
        </StyledProductList>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
