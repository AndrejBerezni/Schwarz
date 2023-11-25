import { BsWatch } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa6'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { PiChartLineUpLight } from 'react-icons/pi'
import { RiPagesLine } from 'react-icons/ri'
import { useNavigate } from 'react-router'
import { StyledAdminNavbar } from './AdminNavbar.styles'
import AdminNavLink from './AdminNavLink'

export default function AdminNavbar() {
  const navigate = useNavigate()

  return (
    <StyledAdminNavbar>
      <AdminNavLink
        handleClick={() => navigate('/admin')}
        icon={<PiChartLineUpLight />}
        linkText="Dashboard"
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/products')}
        icon={<BsWatch />}
        linkText="Products"
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/orders')}
        icon={<FaReceipt />}
        linkText="Orders"
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/admins')}
        icon={<MdOutlineAdminPanelSettings />}
        linkText="Admins"
      />
      <AdminNavLink
        handleClick={() => navigate('/admin/settings')}
        icon={<RiPagesLine />}
        linkText="Page Settings"
      />
    </StyledAdminNavbar>
  )
}
