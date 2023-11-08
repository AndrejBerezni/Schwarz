import { useNavigate } from 'react-router'
import { PrimaryButton } from '../../../../GlobalStyles'
import {
  StyledHeroCarouselPage,
  HeroCarouselDiv,
  HeroCarouselPageTitle,
  HeroCarouselPageSubtitle,
  HeroCarouselImg,
} from '../HeroCarousel.styles'

interface IHeroCarouselPageProps {
  current: boolean
  img: string
  title: string
  subtitle: string
  buttonText: string
  link: string
}

export default function HeroCarouselPage({
  current,
  img,
  title,
  subtitle,
  buttonText,
  link,
}: Readonly<IHeroCarouselPageProps>) {
  const navigate = useNavigate()

  return (
    <StyledHeroCarouselPage current={current}>
      <HeroCarouselDiv>
        <HeroCarouselPageSubtitle>{subtitle}</HeroCarouselPageSubtitle>
        <HeroCarouselPageTitle>{title}</HeroCarouselPageTitle>
        <PrimaryButton onClick={() => navigate(link)}>
          {buttonText}
        </PrimaryButton>
      </HeroCarouselDiv>
      <HeroCarouselImg src={img} />
    </StyledHeroCarouselPage>
  )
}
