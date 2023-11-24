import { AdminDashboardCol, AdminDashboardRow } from './AdminDashboard.styles'
import { AdminSubtitle } from '../../../pages/Admin/Admin.styles'
import AdminDashboardBox from './AdminDashboardBox'

export default function AdminDashboard() {
  return (
    <AdminDashboardCol>
      <AdminDashboardRow></AdminDashboardRow>
      <AdminSubtitle>Total Income</AdminSubtitle>
      <AdminDashboardRow>
        {['month', 'week', 'day'].map((period) => (
          <AdminDashboardBox period={period as 'month' | 'week' | 'day'} />
        ))}
      </AdminDashboardRow>
    </AdminDashboardCol>
  )
}
