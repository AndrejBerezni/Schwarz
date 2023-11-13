import { Outlet } from 'react-router'
import { StyledHome } from './Home.styles'
import BrowseCategories from '../../components/BrowseCategories'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import useProducts from '../../hooks/useProducts'

export default function Home() {
  const products = useProducts({ metadataProp: 'new', metadataCriteria: '1' })

  return (
    <StyledHome>
      <div style={{ display: 'flex' }}>
        <BrowseCategories />
        <Outlet />
      </div>
      <FeaturedCarousel products={products} />
    </StyledHome>
  )
}
