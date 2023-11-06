import { StyledTopNavbar, StyledNavTitle } from './TopNavbar.styles'

export default function TopNavbar() {
  return (
    <StyledTopNavbar>
      <StyledNavTitle>Schwartz</StyledNavTitle>
      <div>
        <input type="text"></input>
      </div>
      <div>
        <button>user</button>
        <button>cart</button>
      </div>
    </StyledTopNavbar>
  )
}
