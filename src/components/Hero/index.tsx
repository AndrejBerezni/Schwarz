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
import watch from '../../assets/featuredwatch.png'
import watch2 from '../../assets/featuredwatch2.png'
import ProductCard from '../ProductCard'

export default function Hero() {
  return (
    <StyledHero>
      <HeroCarousel />
      <HeroDiv>
        <HeroBox>
          <HeroBoxTextDiv>
            <HeroBoxTitle>Save 15%</HeroBoxTitle>
            <HeroBoxTitle>Cartier</HeroBoxTitle>
            <HeroBoxLink>Shop Now</HeroBoxLink>
          </HeroBoxTextDiv>
          <HeroBoxImg src={watch} />
        </HeroBox>
        <HeroBox>
          <HeroBoxTextDiv>
            <HeroBoxTitle>Save 25%</HeroBoxTitle>
            <HeroBoxTitle>Women Collection</HeroBoxTitle>
            <HeroBoxLink>Shop Now</HeroBoxLink>
          </HeroBoxTextDiv>
          <HeroBoxImg src={watch2} />
        </HeroBox>
      </HeroDiv>
    </StyledHero>
  )
}
