import { styled, css, keyframes } from 'styled-components'

const preloaderAnimationKF = keyframes`
0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`

const preloaderAnimation = (props) => css`
  ${preloaderAnimationKF} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`

export const StyledPreloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PreloaderAnimationDiv = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  & div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${(props) => props.theme.primary};
    animation: ${preloaderAnimation};
  }
  & div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`
