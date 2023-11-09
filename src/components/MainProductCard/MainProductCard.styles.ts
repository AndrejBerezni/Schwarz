import { styled } from 'styled-components'

export const StyledMainProductCard = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`
export const MainProductBox = styled.div`
  height: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 55%;
  padding: 20px;
  background-color: ${(props) => props.theme.navBgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MainProductBrand = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.primary};
  margin: 0;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const MainProductTitle = styled.h1`
  font-family: ${(props) => props.theme.headFont};
  margin: 0;
  font-size: 2rem;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const MainProductDescription = styled.p`
  text-align: start;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

interface IMainProductAddDivProp {
  variant?: string
}
export const MainProductAddDiv = styled.div<IMainProductAddDivProp>`
  width: ${(props) => (props.variant === 'main' ? '100%' : '50%')};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: ${(props) =>
    props.variant === 'main' ? 'space-between' : 'end'};
  align-items: center;
  margin-top: ${(props) => (props.variant === 'main' ? '30px' : '0')};
  font-size: 1rem;
  @media (max-width: 768px) {
    justify-content: ${(props) =>
      props.variant === 'main' ? 'space-between' : 'center'};
  }
`

export const MainProductPrice = styled.p`
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.primary};
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const MainProductImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: 0.3s;
`

export const MainProductImgBox = styled.div`
  background: linear-gradient(to bottom, #333333, #222222, #111111, #000000);
  height: 100%;
  width: 40%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  &:hover {
    > ${MainProductImg} {
      transform: scale(1.1);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    max-height: 500px;
  }
  position: relative;
`

export const MainProductTooltip = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  border-radius: 5px;
  opacity: 0;
  width: fit-content;
  padding: 5px 5px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.headFont};
  transition: 0.3s;
  pointer-events: none;
`

export const MainProductFavBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.primary};
  border: none;
  background-color: transparent;
  font-size: 24px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    + ${MainProductTooltip} {
      opacity: 1;
      top: 10px;
    }
  }
`
