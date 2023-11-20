import {
  StyledAdminNavbar,
  AdminNavLink,
  AdminNavLinkText,
  AdminNavLinkIcon,
} from './AdminNavbar.styles'
import { PiChartLineUpLight } from 'react-icons/pi'
import { BsWatch } from 'react-icons/bs'
import { FaReceipt } from 'react-icons/fa6'
import { MdOutlineAdminPanelSettings, MdOutlineSettings } from 'react-icons/md'

export default function AdminNavbar() {
  return (
    <StyledAdminNavbar>
      <AdminNavLink>
        <AdminNavLinkText>Dashboard</AdminNavLinkText>
        <AdminNavLinkIcon>
          <PiChartLineUpLight />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink>
        <AdminNavLinkText>Products</AdminNavLinkText>
        <AdminNavLinkIcon>
          <BsWatch />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink>
        <AdminNavLinkText>Orders</AdminNavLinkText>
        <AdminNavLinkIcon>
          <FaReceipt />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink>
        <AdminNavLinkText>Admins</AdminNavLinkText>
        <AdminNavLinkIcon>
          <MdOutlineAdminPanelSettings />
        </AdminNavLinkIcon>
      </AdminNavLink>
      <AdminNavLink>
        <AdminNavLinkText>Settings</AdminNavLinkText>
        <AdminNavLinkIcon>
          <MdOutlineSettings />
        </AdminNavLinkIcon>
      </AdminNavLink>
    </StyledAdminNavbar>
  )
}
