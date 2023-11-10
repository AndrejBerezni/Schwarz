import { styled } from 'styled-components'

export const StyledAccountNavbar = styled.nav`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.theme.primary};
`
interface IAccountNavLinkProps {
  current?: boolean
  theme: {
    primary: string
    secondary: string
    borderColor: string
    navBgColor: string
    headFont: string
  }
}

export const AccountNavLink = styled.a<IAccountNavLinkProps>`
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) =>
    props.current ? props.theme.navBgColor : props.theme.secondaryText};
  transition: 0.3s;
  position: relative;
  &:hover {
    color: ${(props) => props.theme.navBgColor};
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 3px;
    left: ${(props) => (props.current ? '0' : '50%')};
    position: absolute;
    background: ${(props) => props.theme.navBgColor};
    transition:
      width 0.3s ease 0s,
      left 0.3s ease 0s;
    width: ${(props) => (props.current ? '100%' : '0')};
  }
`
