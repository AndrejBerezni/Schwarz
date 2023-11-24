import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { StyledAccountNavbar, AccountNavLink } from './AccountNavbar.styles'
import { signOutUser } from '../../firebase/firebase-authentication'
import { signOut } from '../../store/authentication'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { VscSignOut } from 'react-icons/vsc'

import {
  SignOutButton,
  SignOutTooltip,
  AccountNavDiv,
} from './AccountNavbar.styles'

export default function AccountNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOutUser()
    dispatch(signOut())
    navigate('/')
  }

  const location = useLocation()
  return (
    <StyledAccountNavbar>
      <AccountNavDiv>
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
      </AccountNavDiv>
      <AccountNavDiv>
        <SignOutButton onClick={handleSignOut}>
          <VscSignOut />
          <SignOutTooltip>Sign Out</SignOutTooltip>
        </SignOutButton>
      </AccountNavDiv>
    </StyledAccountNavbar>
  )
}
