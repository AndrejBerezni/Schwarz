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

export const EditUIForm = styled.form`
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const EditUILabel = styled.label`
  color: ${(props) => props.theme.secondaryText};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`

export const EditUIInput = styled.input
