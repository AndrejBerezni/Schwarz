import { styled } from 'styled-components'

export const StyledHeroCarousel = styled.div`
  min-width: 280px;
  height: 400px;
  min-height: 400px;
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.borderColor};
  position: relative;
  padding: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

interface IHeroCarouselItemProps {
  theme: {
    primary: string
    borderColor: string
  }
  current?: boolean
}

export const HeroCarouselIndicatorItem = styled.div<IHeroCarouselItemProps>`
  width: ${(props) => (props.current ? '14px' : '10px')};
  height: ${(props) => (props.current ? '14px' : '10px')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.current ? props.theme.primary : props.theme.borderColor};
  &:hover {
    cursor: pointer;
    transform: scale(${(props) => (props.current ? '1' : '1.2')});
  }
`

export const HeroCarouselIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 10px;
`

export const StyledHeroCarouselPage = styled.div<IHeroCarouselItemProps>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.current ? '0' : '-100%')};
  z-index: ${(props) => (props.current ? '0' : '-1')};
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #222222, #111111, #000000);
  transition: left 1s ease-out;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 30px;
  }
`
export const HeroCarouselDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const HeroCarouselPageTitle = styled.h5`
  font-size: 32px;
  text-align: start;
  margin: 0 0 40px;
  text-transform: uppercase;
  @media (min-width: 1096px) {
    font-size: 46px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const HeroCarouselPageSubtitle = styled.h6`
  font-size: 22px;
  margin: 0;
  color: ${(props) => props.theme.textColor};
  text-align: start;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const HeroCarouselImg = styled.img`
  max-width: 50%;
  max-height: 100%;
  color: ${(props) => props.theme.textColor};
  margin-right: -10%;
`
