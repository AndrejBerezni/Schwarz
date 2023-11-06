import { styled } from 'styled-components'

export const StyledTopNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 5px 25px;
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const NavTitle = styled.h5`
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.primary};
  font-size: x-large;
  margin: 0;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px ${(props) => props.theme.bgColor};
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.secondary};
  }
`

export const NavDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
  &:nth-of-type(3) {
    justify-content: space-between;
    margin-bottom: 0px;
  }
`

export const NavSearchIcon = styled(NavDiv)`
  background-color: ${(props) => props.theme.primary};
  height: 30px;
  width: 30px;
  color: ${(props) => props.theme.navBgColor};
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 0;
  right: 0;
`

export const NavInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 0 35px 0 5px;
  font-family: ${(props) => props.theme.textFont};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const NavTooltip = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.navBgColor};
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.headFont};
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  padding: 8px 0 0;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  top: 0%;
  left: -100%;
  position: absolute;
`

export const CartItemsNumber = styled.p`
  position: absolute;
  top: 0%;
  right: -15%;
  width: fit-content;
  height: 15px;
  font-size: 12px;
  padding: 0 3px;
  margin: 0;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.navBgColor};
  z-index: 1;
`

//using 'variant' prop was showing TS warning, therefore I am creating interface for props
interface INavButtonProps {
  theme: {
    primary: string
    secondary: string
  }
  variant?: string
}

export const NavButton = styled.button<INavButtonProps>`
  color: ${(props) => props.theme.primary};
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 1.8rem;
  text-shadow: 2px 2px 3px ${(props) => props.theme.secondary};
  margin-left: 10px;
  transition: 0.3s;
  display: ${(props) =>
    props.variant === 'mobile-only' ? 'none' : 'inline-block'};
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    color: ${(props) => props.theme.secondary};
    + ${NavTooltip} {
      opacity: 1;
      pointer-events: auto;
    }
  }
  @media (max-width: 768px) {
    display: inline-block;
  }
  position: relative;
`