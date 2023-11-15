import { styled } from 'styled-components'

export const StyledWishlistItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`
export const WishlistItemDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    &:nth-of-type(2) {
      justify-content: end;
    }
  }
`
export const WishlistItemImg = styled.img`
  max-height: 80px;
`
export const WishlistItemText = styled.p`
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  &:nth-of-type(2) {
    color: ${(props) => props.theme.secondaryText};
    font-style: italic;
  }
`

export const WishlistTooltip = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  border-radius: 5px;
  opacity: 0;
  width: 90px;
  padding: 5px 5px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${(props) => props.theme.headFont};
  transition: 0.3s;
  pointer-events: none;
  @media (max-width: 768px) {
    left: 20px;
    top: 0;
  }
`

export const WishlistItemBtn = styled.button`
  color: ${(props) => props.theme.primary};
  background: none;
  border: none;
  font-size: 24px;
  transition: 0.3s;
  position: relative;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    color: ${(props) => props.theme.textColor};
    + ${WishlistTooltip} {
      opacity: 1;
      pointer-events: auto;
    }
  }
`
