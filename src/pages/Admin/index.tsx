import { Outlet } from 'react-router'
import { StyledAdminPage, StyledAdminOutlet } from './Admin.styles'
import AdminNavbar from '../../components/admin/AdminNavbar'

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
