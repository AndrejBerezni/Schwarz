import { styled } from 'styled-components'

export const StyledReviewCard = styled.li`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: transparent;
  &:last-of-type {
    border: none;
  }
`
