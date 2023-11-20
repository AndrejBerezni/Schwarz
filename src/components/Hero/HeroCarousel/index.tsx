import { useState, useEffect } from 'react'
import {
  StyledHeroCarousel,
  HeroCarouselIndicator,
  HeroCarouselIndicatorItem,
} from './HeroCarousel.styles'
import HeroCarouselPage from './HeroCarouselPage/HeroCarouselPage'
import { IHeroItem } from '../../../compiler/heroItemInterface'
import { setupPageItems } from '../../../firebase/admin/firebase-admincontent'

export default function HeroCarousel() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [carouselData, setCarouselData] = useState<IHeroItem[]>([])

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  useEffect(() => {
    const fetchCarouselData = async () => {
      const fetchedData = await setupPageItems([
        'carousel1',
        'carousel2',
        'carousel3',
      ])
      if (fetchedData) {
        setCarouselData(fetchedData)
      }
    }

    fetchCarouselData()
  }, [])

  useEffect(() => {
    //wait for carousel to be set up, to start the timer
    if (carouselData.length > 0) {
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
    }
  }, [carouselData])

  return (
    <StyledHeroCarousel>
      {carouselData.map((item, index) => (
        <HeroCarouselPage
          key={`${item.title}-cp`}
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
            key={`${item.title}-ci`}
            current={currentPage === index}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </HeroCarouselIndicator>
    </StyledHeroCarousel>
  )
}
