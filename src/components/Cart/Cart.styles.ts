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
  right: ${(props) => (props.show ? '0' : '-400px')};
  height: 100vh;
  width: min(400px, 50vw);
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  z-index: 2;
  transition: right 0.4s ease-in;
  @media (max-width: 768px) {
    width: 100%;
  }
`
