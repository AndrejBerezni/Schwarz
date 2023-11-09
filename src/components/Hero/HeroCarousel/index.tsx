import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  StyledHeroCarousel,
  HeroCarouselIndicator,
  HeroCarouselIndicatorItem,
} from './HeroCarousel.styles'
import HeroCarouselPage from './HeroCarouselPage/HeroCarouselPage'
import watch3 from '../../../assets//featuredwatch2.png'
import watch from '../../../assets/carouselimg1.png'
import watch2 from '../../../assets/featuredwatch.png'

//just temporarily here until I start working with data
const carouselData = [
  {
    id: uuidv4(),
    img: watch,
    title: 'Save 30% on your first order',
    subtitle: 'Special Offer',
    buttonText: 'Shop Now',
    link: '/products',
  },
  {
    id: uuidv4(),
    img: watch2,
    title: 'Save 15% on Cartier watches',
    subtitle: 'Latest Discount',
    buttonText: 'Shop Now',
    link: '/products',
  },
  {
    id: uuidv4(),
    img: watch3,
    title: 'Save 25% on women collection',
    subtitle: 'Christmas Deal',
    buttonText: 'Shop Now',
    link: '/products',
  },
]

export default function HeroCarousel() {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  useEffect(() => {
    const changePage = setInterval(
      () =>
        setCurrentPage((prev) =>
          prev === carouselData.length - 1 ? 0 : prev + 1
        ),
      6000
    )
    return () => {
      clearInterval(changePage)
    }
  }, [])

  return (
    <StyledHeroCarousel>
      {carouselData.map((item, index) => (
        <HeroCarouselPage
          key={item.id}
          current={currentPage === index}
          img={item.img}
          title={item.title}
          subtitle={item.subtitle}
          buttonText={item.buttonText}
          link={item.link}
        />
      ))}
      <HeroCarouselIndicator>
        {carouselData.map((item, index) => (
          <HeroCarouselIndicatorItem
            key={item.id}
            current={currentPage === index}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </HeroCarouselIndicator>
    </StyledHeroCarousel>
  )
}
