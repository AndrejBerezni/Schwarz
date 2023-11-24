import { styled } from 'styled-components'

export const StyledAccountNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  font-family: ${(props) => props.theme.headFont};
  font-style: italic;
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

export const AccountNavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SignOutTooltip = styled.div`
  position: absolute;
  width: fit-content;
  text-wrap: nowrap;
  top: 0;
  left: -120px;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.navBgColor};
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
  @media (max-width: 425px) {
    font-size: 10px;
    left: -10px;
    top: -10px;
  }
`

export const SignOutButton = styled(AccountNavLink)`
  &:hover {
    cursor: pointer;
    > ${SignOutTooltip} {
      opacity: 1;
    }
  }
`
