import { Outlet } from 'react-router'
import { StyledHome } from './Home.styles'
import BrowseCategories from '../../components/BrowseCategories'
import FeaturedCarousel from '../../components/FeaturedCarousel'

export default function Home() {
  return (
    <StyledHome>
      <div style={{ display: 'flex' }}>
        <BrowseCategories />
        <Outlet />
      </div>
      <FeaturedCarousel
        useProductsData={{ metadataProp: 'new', metadataCriteria: '1' }}
        title="Latest Products"
      />
    </StyledHome>
  )
}
