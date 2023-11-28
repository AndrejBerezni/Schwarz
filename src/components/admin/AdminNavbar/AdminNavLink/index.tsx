import { ReactNode } from 'react'
import {
  StyledAdminNavLink,
  AdminNavLinkText,
  AdminNavLinkIcon,
} from '../AdminNavbar.styles'

interface IAdminNavLinkProps {
  handleClick: () => void
  icon: ReactNode
  linkText: string
  current: boolean
}

export default function AdminNavLink({
  handleClick,
  icon,
  linkText,
  current,
}: Readonly<IAdminNavLinkProps>) {
  return (
    <StyledAdminNavLink onClick={handleClick} current={current}>
      <AdminNavLinkText>{linkText}</AdminNavLinkText>
      <AdminNavLinkIcon>{icon}</AdminNavLinkIcon>
    </StyledAdminNavLink>
  )
}
