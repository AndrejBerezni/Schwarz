import {
  StyledHeroCarousel,
  HeroCarouselIndicator,
  HeroCarouselIndicatorItem,
  HeroCarouselPage,
  HeroCarouselPageTitle,
  HeroCarouselPageSubtitle,
  HeroCarouselImg,
} from './HeroCarousel.styles'
import { HeroBoxTextDiv } from '../Hero.style'
import { PrimaryButton } from '../../../GlobalStyles'
import watch from '../../../assets/carouselimg1.png'
export default function HeroCarousel() {
  return (
    <StyledHeroCarousel>
      <HeroCarouselPage current={true}>
        <HeroBoxTextDiv>
          <HeroCarouselPageSubtitle>Special Offer</HeroCarouselPageSubtitle>
          <HeroCarouselPageTitle>
            Save 30% on your first order
          </HeroCarouselPageTitle>
          <PrimaryButton>Shop Now</PrimaryButton>
        </HeroBoxTextDiv>
        <HeroCarouselImg src={watch} />
      </HeroCarouselPage>
      <HeroCarouselPage />
      <HeroCarouselPage />
      <HeroCarouselIndicator>
        <HeroCarouselIndicatorItem current={true} />
        <HeroCarouselIndicatorItem />
        <HeroCarouselIndicatorItem />
      </HeroCarouselIndicator>
    </StyledHeroCarousel>
  )
}
