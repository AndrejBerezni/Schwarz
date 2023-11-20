import AdminNavbar from '../../components/AdminNavbar'
import { StyledAdminPage, StyledAdminOutlet } from './Admin.styles'
import { Outlet } from 'react-router'

export default function Admin() {
  return (
    <StyledAdminPage>
      <AdminNavbar />
      <StyledAdminOutlet>
        <Outlet />
      </StyledAdminOutlet>
    </StyledAdminPage>
  )
}
