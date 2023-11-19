import { useState } from 'react'
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi'
import {
  StyledFeaturedCarousel,
  FeaturedCarouselInner,
  FeaturedCarouselTitle,
  FeaturedCarouselCommand,
  FeaturedCarouselRight,
} from './FeaturedCarousel.styles'
import useCarouselProducts from '../../hooks/useCarouselProducts'
import ProductCard from '../ProductCard'
import Spinner from '../Spinner'

interface IFeaturedCarouselProps {
  useProductsData: {
    metadataProp: string
    metadataCriteria: string
  }
  title: string
}

export default function FeaturedCarousel({
  useProductsData,
  title,
}: Readonly<IFeaturedCarouselProps>) {
  // I have moved fetching products inside the carousel from parent component
  // because of Product page - I am using useEffect to fetch product data,
  // and without that product data I could not fetch related products for carousel.
  // Since I am not able to call hook inside a hook,
  // I moved this to be called in a component that will be rendered only once product from Product page is defined
  const products = useCarouselProducts(useProductsData)

  const [firstIndex, setFirstIndex] = useState(0)

  const handleSlide = (direction: string) => {
    if (direction === 'right' && firstIndex < products.length - 1) {
      setFirstIndex((prev) => prev + 1)
    } else if (direction === 'left' && firstIndex > 0) {
      setFirstIndex((prev) => prev - 1)
    }
  }

  return (
    <StyledFeaturedCarousel>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <>
          <FeaturedCarouselTitle>{title}</FeaturedCarouselTitle>
          <FeaturedCarouselCommand
            direction="left"
            disabled={firstIndex === 0}
            onClick={() => handleSlide('left')}
          >
            <PiArrowCircleLeftFill />
          </FeaturedCarouselCommand>
          <FeaturedCarouselCommand
            direction="right"
            disabled={firstIndex === products.length - 1}
            onClick={() => handleSlide('right')}
          >
            <PiArrowCircleRightFill />
          </FeaturedCarouselCommand>
          <FeaturedCarouselRight />
          <FeaturedCarouselInner firstElement={firstIndex}>
            {/* Limit products to 10 */}
            {products.slice(0, 10).map((item) => (
              <ProductCard key={item.docId} product={item} />
            ))}
            {/* Adding again array of items,
         because I did not arrange
          not having empty space on the right inside carousel
           when the last item from array was set as first: */}
            {products.slice(0, 5).map((item) => (
              <ProductCard key={`${item.docId}2`} product={item} />
            ))}
          </FeaturedCarouselInner>
        </>
      )}
    </StyledFeaturedCarousel>
  )
}
