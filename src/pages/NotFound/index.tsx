import {
  StyledNotFoundContainer,
  NotFoundTitle,
  NotFoundText,
} from './NotFound.styles'

export default function NotFound() {
  return (
    <StyledNotFoundContainer>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundText>
        Sorry, the page you are looking for does not exist.
      </NotFoundText>
    </StyledNotFoundContainer>
  )
}
