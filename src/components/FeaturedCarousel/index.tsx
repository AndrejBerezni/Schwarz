import { useState } from 'react'
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi'
import {
  StyledFeaturedCarousel,
  FeaturedCarouselInner,
  FeaturedCarouselTitle,
  FeaturedCarouselCommand,
  FeaturedCarouselRight,
} from './FeaturedCarousel.styles'
import { IProduct } from '../../compiler/productInterface'
import ProductCard from '../ProductCard'

interface IFeaturedCarouselProps {
  products: IProduct[]
}

export default function FeaturedCarousel({
  products,
}: Readonly<IFeaturedCarouselProps>) {
  const [first, setFirst] = useState(0)

  const handleSlide = (direction: string) => {
    if (direction === 'right' && first < products.length - 1) {
      setFirst((prev) => prev + 1)
    } else if (direction === 'left' && first > 0) {
      setFirst((prev) => prev - 1)
    }
  }

  return (
    <StyledFeaturedCarousel>
      <FeaturedCarouselTitle>Latest products</FeaturedCarouselTitle>
      <FeaturedCarouselCommand
        side="left"
        disabled={first === 0}
        onClick={() => handleSlide('left')}
      >
        <PiArrowCircleLeftFill />
      </FeaturedCarouselCommand>
      <FeaturedCarouselCommand
        side="right"
        disabled={first === products.length - 1}
        onClick={() => handleSlide('right')}
      >
        <PiArrowCircleRightFill />
      </FeaturedCarouselCommand>
      <FeaturedCarouselRight />
      <FeaturedCarouselInner first={first} length={products.length}>
        {products.map((item) => (
          <ProductCard key={item.docId} product={item} />
        ))}
        {/* Adding again array of items,
         because I was not able to arrange
          not having empty space on the right inside carousel
           when the last item from array was set as first: */}
        {products.map((item) => (
          <ProductCard key={`${item.docId}2`} product={item} />
        ))}
      </FeaturedCarouselInner>
    </StyledFeaturedCarousel>
  )
}
