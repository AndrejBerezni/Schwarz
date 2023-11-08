import { styled } from 'styled-components'

export const ProductCardImg = styled.img`
  max-height: 50%;
  align-self: center;
  transition: 0.5s;
`

export const StyledProductCard = styled.div`
  width: 240px;
  height: 320px;
  background: linear-gradient(to bottom, #222222, #111111, #000000);
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 5px 5px 10px 10px;
  &:hover {
    cursor: pointer;
    & > * {
      cursor: pointer;
    }
    & > ${ProductCardImg} {
      transform: scale(1.2);
      filter: drop-shadow(0px 0px 4px ${(props) => props.theme.primary});
    }
  }
  @media (max-width: 768px) {
    width: min(90%, 320px);
  }
`

export const ProductCardBadgeContainer = styled.div`
  display: flex;
  justify-content: end;
  align-self: end;
  gap: 5px;
  padding: 0 15px;
`

export const ProductCardBadge = styled.p`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 20px;
`

export const ProductCardText = styled.p`
  align-text: start;
  font-weight: bold;
  margin: 0;
`

export const ProductPrice = styled.p`
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.primary};
  font-size: 20px;
  margin-top: 20px;
`
