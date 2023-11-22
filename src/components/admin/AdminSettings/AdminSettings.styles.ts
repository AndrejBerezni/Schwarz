import { styled } from 'styled-components'

export const StyledSelect = styled.select`
  font-size: 20px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`
