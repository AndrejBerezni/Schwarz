import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { StyledAccountPage } from './Account.styles'
import AccountNavbar from '../../components/AccountNavbar'
import { hideSidebars } from '../../store/sidebars'

export default function Account() {
  const dispatch = useDispatch()

  return (
    <StyledAccountPage onClick={() => dispatch(hideSidebars())}>
      <AccountNavbar />
      <Outlet />
    </StyledAccountPage>
  )
}
