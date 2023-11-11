import { styled } from 'styled-components'

interface IStyledCartProps {
  theme: {
    navBgColor: string
  }
  show?: boolean
}

export const StyledCart = styled.div<IStyledCartProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.show ? '0' : '-768px')};
  height: 100vh;
  width: min(400px, 50vw);
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: right 0.6s ease-out;
  border-left: 1px solid ${(props) => props.theme.borderColor};
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`

export const CartBackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.borderColor};
  font-size: 200px;
  opacity: 0.5;
`

export const CartProductsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;
  padding-left: 8px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.navBgColor};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.navBgColor};
  }
`

export const StyledCartProductDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  background-color: #00000099;
`

export const CartImg = styled.img`
  max-height: 60%;
`

export const CartTitle = styled.h5`
  font-family: ${(props) => props.theme.headFont};
  margin-bottom: 0;
  text-align: start;
`

export const CartPrice = styled.p`
  text-align: start;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
`

export const CartDeleteBtn = styled.button`
  color: ${(props) => props.theme.primary};
  border: none;
  font-size: 28px;
  background-color: transparent;
  transition: 0.3s;
  &:hover {
    color: red;
    cursor: pointer;
    transform: translateY(-2px);
  }
`

export const StyledCartCheckoutSection = styled.section`
  border-top: 2px solid ${(props) => props.theme.borderColor};
  height: 200px;
  display-flex;
  flex-direction: column;
  align-items: start;
`

export const CartCheckoutTotal = styled.p`
  color: ${(props) => props.theme.secondary};
  font-weight: 500;
  text-align: start;
  padding-left: 20px;
  font-size: 28px;
  font-family: ${(props) => props.theme.headFont};
`

export const CartCheckoutDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`
