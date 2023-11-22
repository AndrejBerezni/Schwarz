import { Outlet } from 'react-router'
import { AdminTitle } from '../../../pages/Admin/Admin.styles'

export default function AdminProducts() {
  return (
    <>
      <AdminTitle>Products</AdminTitle>
      <Outlet />
    </>
  )
}
