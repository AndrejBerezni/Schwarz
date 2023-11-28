import { styled } from 'styled-components'

export const StyledPreloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: ${(props) => props.theme.navBgColor};
`
