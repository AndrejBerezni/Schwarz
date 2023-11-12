import { VscSignOut } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  StyledAccountDetails,
  SignOutButton,
  SignOutTooltip,
} from './AccountDetails.styles'
import { signOutUser } from '../../firebase/firebase-authentication'
import { signOut } from '../../store/authentication'
import { StyledAccountNavbar } from '../AccountNavbar/AccountNavbar.styles'

export default function AccountDetails() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOutUser()
    dispatch(signOut())
    navigate('/')
  }
  return (
    <StyledAccountDetails>
      <StyledAccountNavbar>
        <SignOutButton onClick={handleSignOut}>
          <VscSignOut />
          <SignOutTooltip>Sign Out</SignOutTooltip>
        </SignOutButton>
      </StyledAccountNavbar>
      <h1>Customer</h1>
      <h1>Details</h1>
      <h1>Address</h1>
    </StyledAccountDetails>
  )
}
