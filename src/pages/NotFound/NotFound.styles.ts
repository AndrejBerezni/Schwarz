import { styled } from 'styled-components'

export const StyledNotFoundContainer = styled.main`
  margin-top: 100px;
  width: 100%;
  height: 300px;
`

export const NotFoundTitle = styled.h2`
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.headFont};
`

export const NotFoundText = styled.p`
  font-family: ${(props) => props.theme.headFont};
`
