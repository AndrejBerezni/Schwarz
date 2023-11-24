import { AdminDashboardCol, AdminDashboardRow } from './AdminDashboard.styles'
import { AdminSubtitle } from '../../../pages/Admin/Admin.styles'
import AdminDashboardBox from './AdminDashboardBox'

export default function AdminDashboard() {
  const timePeriods = ['month', 'week', 'day']
  return (
    <AdminDashboardCol>
      <AdminSubtitle>Total Sales</AdminSubtitle>
      <AdminDashboardRow>
        {timePeriods.map((period) => (
          <AdminDashboardBox
            period={period as 'month' | 'week' | 'day'}
            type="sales"
          />
        ))}
      </AdminDashboardRow>
      <AdminDashboardRow></AdminDashboardRow>
      <AdminSubtitle>Total Income</AdminSubtitle>
      <AdminDashboardRow>
        {timePeriods.map((period) => (
          <AdminDashboardBox
            period={period as 'month' | 'week' | 'day'}
            type="balance"
          />
        ))}
      </AdminDashboardRow>
    </AdminDashboardCol>
  )
}
