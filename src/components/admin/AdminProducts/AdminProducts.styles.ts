import { styled } from 'styled-components'

export const AdminProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin-top: 20px;
  @media (max-width: 425px) {
    gap: 10px;
    justify-content: space-around;
  }
`

export const StyledAdminProductCard = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  width: 200px;
  height: 150px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: linear-gradient(to bottom, #111111, #000000);
  position: relative;
  @media (max-width: 425px) {
    width: 140px;
    height: 115px;
  }
`

export const AdminProductCardName = styled.h6`
  font-size: 16px;
  margin: 0;
  font-family: ${(props) => props.theme.headFont};
  @media (max-width: 425px) {
    font-size: 12px;
  }
`

export const AdminProductImg = styled.img`
  height: 60px;
  @media (max-width: 425px) {
    height: 40px;
  }
`

export const AdminProductCardBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  color: ${(props) => props.theme.primary};
  position: absolute;
  bottom: 10px;
  right: 10px;
  transition: 0.3s;
  &:hover {
    transform: translateX(5px);
    cursor: pointer;
  }
  @media (max-width: 425px) {
    font-size: 16px;
    bottom: 5px;
    right: 5px;
  }
`
