import { styled } from 'styled-components'

export const StyledAccountPage = styled.main`
  width: 100%;
  display: flex;
  height: 600px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.navBgColor};
`
