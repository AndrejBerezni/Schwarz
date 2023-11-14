import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { StyledAccountPage, AccountPageSection } from './Account.styles'
import AccountDetails from '../../components/AccountDetails'
import AccountNavbar from '../../components/AccountNavbar'
import { hideSidebars } from '../../store/sidebars'

export default function Account() {
  const dispatch = useDispatch()

  return (
    <StyledAccountPage onClick={() => dispatch(hideSidebars())}>
      <AccountPageSection>
        <AccountNavbar />
        <Outlet />
      </AccountPageSection>
      <AccountDetails />
    </StyledAccountPage>
  )
}
