import { AdminDashboardCol, AdminDashboardRow } from './AdminDashboard.styles'
import AdminDashboardBox from './AdminDashboardBox'
import { AdminSubtitle } from '../../../pages/Admin/Admin.styles'

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
            key={`${period}-adbs`}
          />
        ))}
      </AdminDashboardRow>
      <AdminSubtitle>Total Income</AdminSubtitle>
      <AdminDashboardRow>
        {timePeriods.map((period) => (
          <AdminDashboardBox
            period={period as 'month' | 'week' | 'day'}
            type="balance"
            key={`${period}-adbb`}
          />
        ))}
      </AdminDashboardRow>
    </AdminDashboardCol>
  )
}
