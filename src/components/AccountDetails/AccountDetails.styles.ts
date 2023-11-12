import { styled } from 'styled-components'
import { AccountNavLink } from '../AccountNavbar/AccountNavbar.styles'

export const StyledAccountDetails = styled.section`
  width: 40%;
  height: 600px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.navBgColor};
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const SignOutTooltip = styled.div`
  position: absolute;
  width: fit-content;
  text-wrap: nowrap;
  top: 0;
  right: -120px;
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.navBgColor};
  opacity: 0;
  pointer-events: none;
  transition: 0.3s;
`

export const SignOutButton = styled(AccountNavLink)`
  &:hover {
    cursor: pointer;
    > ${SignOutTooltip} {
      opacity: 1;
    }
  }
`
