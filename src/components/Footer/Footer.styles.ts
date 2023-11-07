import { styled } from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.navBgColor};
  margin: 0;
  padding; 0;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`

export const FooterText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.secondary};
`
