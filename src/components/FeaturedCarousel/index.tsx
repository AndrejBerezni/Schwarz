import { useState } from 'react'
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi'
import { v4 as uuidv4 } from 'uuid'
import {
  StyledFeaturedCarousel,
  FeaturedCarouselInner,
  FeaturedCarouselTitle,
  FeaturedCarouselCommand,
  FeaturedCarouselRight,
} from './FeaturedCarousel.styles'
import ProductCard from '../ProductCard'

//just temporarily here until I start working with data
const productsArr = [
  uuidv4(),
  uuidv4(),
  uuidv4(),
  uuidv4(),
  uuidv4(),
  uuidv4(),
  uuidv4(),
]

export default function FeaturedCarousel() {
  const [first, setFirst] = useState(0)

  const handleSlide = (direction: string) => {
    if (direction === 'right' && first < productsArr.length - 1) {
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
        disabled={first === productsArr.length - 1}
        onClick={() => handleSlide('right')}
      >
        <PiArrowCircleRightFill />
      </FeaturedCarouselCommand>
      <FeaturedCarouselRight />
      <FeaturedCarouselInner first={first} length={productsArr.length}>
        {productsArr.map((item) => (
          <ProductCard key={item} />
        ))}
        {/* Adding again array of items,
         because I was not able to arrange
          not having empty space on the right inside carousel
           when the last item from array was set as first: */}
        {productsArr.map((item) => (
          <ProductCard key={item} />
        ))}
      </FeaturedCarouselInner>
    </StyledFeaturedCarousel>
  )
}
