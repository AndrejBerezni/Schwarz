import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { StyledAccountNavbar, AccountNavLink } from './AccountNavbar.styles'

export default function AccountNavbar() {
  const location = useLocation()
  console.log(location)
  return (
    <StyledAccountNavbar>
      <AccountNavLink
        as={Link}
        to={'/account'}
        current={location.pathname === '/account'}
      >
        Orders
      </AccountNavLink>
      <AccountNavLink
        as={Link}
        to={'/account/wishlist'}
        current={location.pathname === '/account/wishlist'}
      >
        Wishlist
      </AccountNavLink>
    </StyledAccountNavbar>
  )
}
