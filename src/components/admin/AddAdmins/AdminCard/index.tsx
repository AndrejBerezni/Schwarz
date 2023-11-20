import {
  StyledAdminCard,
  AdminCardText,
  AdminCardButton,
} from '../AddAdmins.styles'
import { LiaUserTimesSolid } from 'react-icons/lia'

interface IAdminCardProps {
  email: string
}

export default function AdminCard({ email }: Readonly<IAdminCardProps>) {
  return (
    <StyledAdminCard>
      <AdminCardText>{email}</AdminCardText>
      <AdminCardButton variant="danger">
        <LiaUserTimesSolid />
      </AdminCardButton>
    </StyledAdminCard>
  )
}
