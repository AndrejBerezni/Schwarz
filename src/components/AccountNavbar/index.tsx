import { StyledAccountNavbar, AccountNavLink } from './AccountNavbar.styles'
import { useLocation } from 'react-router'

export default function AccountNavbar() {
  const location = useLocation()
  console.log(location)
  return (
    <StyledAccountNavbar>
      <AccountNavLink
        href="/account"
        current={location.pathname === '/account'}
      >
        Orders
      </AccountNavLink>
      <AccountNavLink
        href="/account/wishlist"
        current={location.pathname === '/account/wishlist'}
      >
        Wishlist
      </AccountNavLink>
    </StyledAccountNavbar>
  )
}
