import { LiaUserTimesSolid } from 'react-icons/lia'
import {
  StyledAdminCard,
  AdminCardText,
  AdminCardButton,
} from '../AddAdmins.styles'

interface IAdminCardProps {
  email: string
  handleClick: (email: string) => void
}

export default function AdminCard({
  email,
  handleClick,
}: Readonly<IAdminCardProps>) {
  return (
    <StyledAdminCard>
      <AdminCardText>{email}</AdminCardText>
      <AdminCardButton variant="danger" onClick={() => handleClick(email)}>
        <LiaUserTimesSolid />
      </AdminCardButton>
    </StyledAdminCard>
  )
}
