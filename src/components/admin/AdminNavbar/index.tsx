import { BsWatch } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa6'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { PiChartLineUpLight } from 'react-icons/pi'
import { RiPagesLine } from 'react-icons/ri'
import { useNavigate, useLocation } from 'react-router'
import { StyledAdminNavbar } from './AdminNavbar.styles'
import AdminNavLink from './AdminNavLink'

export default function AdminNavbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <StyledAdminNavbar>
      <AdminNavLink
        handleClick={() => navigate('/admin')}
        icon={<PiChartLineUpLight />}
        linkText="Dashboard"
        current={location.pathname === '/admin'}
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/products')}
        icon={<BsWatch />}
        linkText="Products"
        current={
          location.pathname === '/admin/products' ||
          location.pathname === '/admin/products/newproduct'
        }
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/orders')}
        icon={<FaReceipt />}
        linkText="Orders"
        current={location.pathname === '/admin/orders'}
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/admins')}
        icon={<MdOutlineAdminPanelSettings />}
        linkText="Admins"
        current={location.pathname === '/admin/admins'}
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/settings')}
        icon={<RiPagesLine />}
        linkText="Page Settings"
        current={location.pathname === '/admin/settings'}
      />
    </StyledAdminNavbar>
  )
}
