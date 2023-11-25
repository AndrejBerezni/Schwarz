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
}

export default function AdminNavLink({
  handleClick,
  icon,
  linkText,
}: Readonly<IAdminNavLinkProps>) {
  return (
    <StyledAdminNavLink onClick={handleClick}>
      <AdminNavLinkText>{linkText}</AdminNavLinkText>
      <AdminNavLinkIcon>{icon}</AdminNavLinkIcon>
    </StyledAdminNavLink>
  )
}
