import { useState } from 'react'
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from 'react-icons/pi'
import { v4 as uuidv4 } from 'uuid'
import {
  StyledFeaturedCarousel,
  FeaturedCarouselInner,
  FeaturedCarouselTitle,
  FeaturedCarouselCommand,
} from './FeaturedCarousel.styles'
import ProductCard from '../ProductCard'

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
      <FeaturedCarouselInner first={first}>
        {productsArr.map((item) => (
          <ProductCard key={item} />
        ))}
      </FeaturedCarouselInner>
    </StyledFeaturedCarousel>
  )
}
