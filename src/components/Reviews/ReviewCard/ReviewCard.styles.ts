import { styled } from 'styled-components'

export const StyledReviewCard = styled.li`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: transparent;
  &:last-of-type {
    border: none;
  }
  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.borderColor};
    margin-top: 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
`

export const ReviewCardUsername = styled.h4`
  color: ${(props) => props.theme.secondaryText};
  align-self: end;
  font-style: italic;
`

export const ReviewCardText = styled.p`
  font-size: 20px;
`
