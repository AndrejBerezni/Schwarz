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
  z-index: 2;
  transition: right 0.6s ease-out;
  border-left: 1px solid ${(props) => props.theme.borderColor};
  @media (max-width: 768px) {
    width: 100%;
    border: none;
  }
`

export const CloseCartButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.borderColor};
  font-weight: bold;
  font-size: 20px;
  border: none;
  transition: 0.5s;
  &: hover {
    cursor: pointer;
    transform: rotate(180deg);
    color: ${(props) => props.theme.primary};
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
