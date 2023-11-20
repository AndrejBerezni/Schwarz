import { useEffect, useState } from 'react'
import {
  StyledHero,
  HeroDiv,
  HeroBox,
  HeroBoxTextDiv,
  HeroBoxTitle,
  HeroBoxLink,
  HeroBoxImg,
} from './Hero.style'
import HeroCarousel from './HeroCarousel'
import { IHeroItem } from '../../compiler/heroItemInterface'
import { setupPageItems } from '../../firebase/admin/firebase-admincontent'

export default function Hero() {
  //this can be moved to custom hook later, together with carousel ones, to reuse the hook instead of writing the same thing twice
  const [heroData, setHeroData] = useState<IHeroItem[]>([])

  useEffect(() => {
    const fetchHeroData = async () => {
      const fetchedData = await setupPageItems(['hero1', 'hero2'])
      if (fetchedData) {
        setHeroData(fetchedData)
      }
    }

    fetchHeroData()
  }, [])

  return (
    <StyledHero>
      <HeroCarousel />
      {heroData.length > 0 && (
        <HeroDiv>
          {/* Create component for these two below */}
          <HeroBox>
            <HeroBoxTextDiv>
              <HeroBoxTitle>{heroData[0].title}</HeroBoxTitle>
              <HeroBoxTitle>{heroData[0].subtitle}</HeroBoxTitle>
              <HeroBoxLink>{heroData[0].buttonText}</HeroBoxLink>
            </HeroBoxTextDiv>
            <HeroBoxImg src={heroData[0].img} />
          </HeroBox>
          <HeroBox>
            <HeroBoxTextDiv>
              <HeroBoxTitle>{heroData[1].title}</HeroBoxTitle>
              <HeroBoxTitle>{heroData[1].subtitle}</HeroBoxTitle>
              <HeroBoxLink>{heroData[1].buttonText}</HeroBoxLink>
            </HeroBoxTextDiv>
            <HeroBoxImg src={heroData[1].img} />
          </HeroBox>
        </HeroDiv>
      )}
    </StyledHero>
  )
}
