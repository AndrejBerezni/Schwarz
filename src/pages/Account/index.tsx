import { StyledAccountPage, AccountPageSection } from './Account.styles'
import AccountDetails from '../../components/AccountDetails'
import { Outlet } from 'react-router'

export default function Account() {
  return (
    <StyledAccountPage>
      <AccountPageSection>
        <Outlet />
      </AccountPageSection>
      <AccountDetails />
    </StyledAccountPage>
  )
}
