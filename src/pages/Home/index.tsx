import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { StyledHome } from './Home.styles'
import BrowseCategories from '../../components/BrowseCategories'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import { hideSidebars } from '../../store/sidebars'

export default function Home() {
  const dispatch = useDispatch()

  return (
    <StyledHome onClick={() => dispatch(hideSidebars())}>
      <div style={{ display: 'flex' }}>
        <BrowseCategories />
        <Outlet />
      </div>
      <FeaturedCarousel
        useProductsData={{
          metadataProp: 'new',
          metadataCriteria: '1',
        }}
        title="Latest Products"
      />
    </StyledHome>
  )
}
