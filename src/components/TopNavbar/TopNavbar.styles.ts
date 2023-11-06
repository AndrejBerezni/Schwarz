import styled from 'styled-components'

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

export const StyledNavTitle = styled.h5`
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

export const StyledNavDiv = styled.div`
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
  }
`

export const StyledNavSearchIcon = styled(StyledNavDiv)`
  background-color: ${(props) => props.theme.primary};
  height: 30px;
  width: 30px;
  color: ${(props) => props.theme.navBgColor};
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 0;
  right: 0;
`

export const StyledNavInput = styled.input`
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

interface StyledNavButtonProps {
  theme: {
    primary: string
    secondary: string
  }
  variant?: string
}

export const StyledNavButton = styled.button<StyledNavButtonProps>`
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
  }
  @media (max-width: 768px) {
    display: inline-block;
  }
`
