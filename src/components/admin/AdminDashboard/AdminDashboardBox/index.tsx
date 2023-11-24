import {
  StyledAdminDashboardBox,
  AdminDashBoxTitle,
  AdminDashBoxNumber,
} from '../AdminDashboard.styles'
import { useState, useEffect } from 'react'
import { getSuccessfulPaymentsSum } from '../../../../stripe/payments'

interface IAdminDashboardBoxProps {
  period: 'month' | 'week' | 'day'
  type: 'balance' | 'sales'
}

export default function AdminDashboardBox({
  period,
  type,
}: Readonly<IAdminDashboardBoxProps>) {
  const [sum, setSum] = useState<string | undefined>('0')
  useEffect(() => {
    const fetchBalance = async () => {
      if (type === 'balance') {
        const balance = await getSuccessfulPaymentsSum(period, type)
        setSum(balance)
      } else if (type === 'sales') {
        const sales = await getSuccessfulPaymentsSum(period, type)
        setSum(sales)
      }
    }
    fetchBalance()
  }, [])

  return (
    <StyledAdminDashboardBox>
      <AdminDashBoxTitle>
        {period === 'day' ? 'Today' : `This ${period}`}
      </AdminDashBoxTitle>
      {sum && (
        <AdminDashBoxNumber>
          {sum}
          {type === 'balance' && ' €'}
        </AdminDashBoxNumber>
      )}
    </StyledAdminDashboardBox>
  )
}
