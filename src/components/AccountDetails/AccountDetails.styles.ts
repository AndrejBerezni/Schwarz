import { styled } from 'styled-components'

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
