import { Outlet } from 'react-router'
import { StyledHome } from './Home.styles'
import BrowseCategories from '../../components/BrowseCategories'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import { useEffect, useState } from 'react'
import { getNewProducts } from '../../firebase/firebase-firestore'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const setCarouselProducts = async () => {
      const newProducts = await getNewProducts()
      setProducts(newProducts)
    }

    setCarouselProducts()
  }, [])
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
