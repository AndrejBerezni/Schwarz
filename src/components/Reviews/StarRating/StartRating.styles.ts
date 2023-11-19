import { styled } from 'styled-components'

export const StarInputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 0;
  width: 100%;
  padding: 0 5px;
  align-items: center;
  color: ${(props) => props.theme.primary};
`

export const StarButton = styled.button`
  font-size: 28px;
  color: ${(props) => props.theme.primary};
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`
