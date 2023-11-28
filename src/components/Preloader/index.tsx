import { StyledPreloader, PreloaderAnimationDiv } from './Preloader.styles'

export default function Preloader() {
  return (
    <StyledPreloader>
      <PreloaderAnimationDiv>
        <div></div>
        <div></div>
        <div></div>
      </PreloaderAnimationDiv>
    </StyledPreloader>
  )
}
