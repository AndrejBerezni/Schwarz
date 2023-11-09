import { useParams } from 'react-router'
import MainProductCard from '../../components/MainProductCard'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import watch from '../../assets/featuredwatch.png'
import watch2 from '../../assets/featuredwatch2.png'

//dummy data before implementing real one
const products = [
  {
    id: 'santosdumont',
    name: 'Santos-Dumont Watch',
    brand: 'cartier',
    description:
      'Medium model, automatic movement, rose gold, 2 interchangeable leather bracelets',
    price: 16010.44,
    img: watch,
  },
  {
    id: 'panthere',
    name: 'LA PANTHÈRE DE CARTIER WATCH',
    brand: 'cartier',
    description: '22.2 mm, quartz movement, yellow gold, diamonds, metal strap',
    price: 79000,
    img: watch2,
  },
]

export default function Product() {
  const { productId } = useParams()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <MainProductCard product={products.find((el) => el.id === productId)} />
      <FeaturedCarousel />
    </div>
  )
}
