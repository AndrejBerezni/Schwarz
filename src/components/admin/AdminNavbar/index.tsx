import { BsWatch } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa6'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { PiChartLineUpLight } from 'react-icons/pi'
import { RiPagesLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import {
  StyledAdminNavbar,
  AdminNavLink,
  AdminNavLinkText,
  AdminNavLinkIcon,
} from './AdminNavbar.styles'

export default function AdminNavbar() {
  const navigate = useNavigate()

  return (
    <StyledAdminNavbar>
      <AdminNavLink onClick={() => navigate('/admin')}>
        <AdminNavLinkText>Dashboard</AdminNavLinkText>
        <AdminNavLinkIcon>
          <PiChartLineUpLight />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink onClick={() => navigate('/admin/products')}>
        <AdminNavLinkText>Products</AdminNavLinkText>
        <AdminNavLinkIcon>
          <BsWatch />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink onClick={() => navigate('/admin/orders')}>
        <AdminNavLinkText>Orders</AdminNavLinkText>
        <AdminNavLinkIcon>
          <FaReceipt />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink onClick={() => navigate('/admin/admins')}>
        <AdminNavLinkText>Admins</AdminNavLinkText>
        <AdminNavLinkIcon>
          <MdOutlineAdminPanelSettings />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink onClick={() => navigate('/admin/settings')}>
        <AdminNavLinkText>Page Settings</AdminNavLinkText>
        <AdminNavLinkIcon>
          <RiPagesLine />
        </AdminNavLinkIcon>
      </AdminNavLink>
    </StyledAdminNavbar>
  )
}
