import { styled } from 'styled-components'

export const StyledFeaturedCarousel = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: no-wrap;
  gap: 10px;
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`

interface IFeaturedCarouselInnerProps {
  firstElement: number
}

export const FeaturedCarouselInner = styled.div<IFeaturedCarouselInnerProps>`
  display: flex;
  gap: 20px;
  margin: 0;
  position: absolute;
  top: 28px;
  left: -${(props) => props.firstElement * 290}px;
  transition: left 0.5s ease-out;
`

export const FeaturedCarouselRight = styled.div`
  height: 320px;
  width: 1px;
  position: absolute;
  top: 28px;
  right: -1px;
  box-shadow: 0px 0px 8px ${(props) => props.theme.primary};
  z-index: 1;
`

export const FeaturedCarouselTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-size: 18px;
`

interface IFeaturedCarouselCommandProps {
  theme: {
    primary: string
    secondary: string
  }
  direction: string
  disabled: boolean
}

export const FeaturedCarouselCommand = styled.div<IFeaturedCarouselCommandProps>`
  position: absolute;
  bottom: 10px;
  z-index: 1;
  font-size: 30px;
  color: ${(props) =>
    props.disabled ? props.theme.secondaryText : props.theme.primary};
  transition: 0.3s;
  ${(props) => (props.direction === 'left' ? `left: 0` : `right: 0`)};
  &:hover {
    ${(props) =>
      props.disabled
        ? ''
        : `
    transform: scale(1.1);
    cursor: pointer;
    color: ${(props: IFeaturedCarouselCommandProps) => props.theme.secondary};`}
  }
`
