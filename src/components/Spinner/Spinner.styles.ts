import { styled, keyframes } from 'styled-components'

const spin = keyframes` 0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }`

export const StyledSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  &::before {
    animation: 1.5s linear infinite ${spin};
    animation-play-state: inherit;
    border: solid 5px ${(props) => props.theme.borderColor};
    border-bottom-color: ${(props) => props.theme.primary};
    border-radius: 50%;
    content: '';
    height: 30px;
    width: 30px;
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
`
