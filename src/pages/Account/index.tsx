import { StyledAccountPage, AccountPageSection } from './Account.styles'
import AccountDetails from '../../components/AccountDetails'
import AccountNavbar from '../../components/AccountNavbar'
import { Outlet } from 'react-router'

export default function Account() {
  return (
    <StyledAccountPage>
      <AccountPageSection>
        <AccountNavbar />
        <Outlet />
      </AccountPageSection>
      <AccountDetails />
    </StyledAccountPage>
  )
}
