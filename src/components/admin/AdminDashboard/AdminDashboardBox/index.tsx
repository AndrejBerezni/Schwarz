import {
  StyledAdminDashboardBox,
  AdminDashBoxTitle,
  AdminDashBoxNumber,
} from '../AdminDashboard.styles'
import { useState, useEffect } from 'react'
import { formatPrice } from '../../../../utilities/formatPrice'
import { getSuccessfulPaymentsSum } from '../../../../stripe/payments'

interface IAdminDashboardBoxProps {
  period: 'month' | 'week' | 'day'
}

export default function AdminDashboardBox({
  period,
}: Readonly<IAdminDashboardBoxProps>) {
  const [sum, setSum] = useState<string>('0')
  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getSuccessfulPaymentsSum(period)
      setSum(formatPrice(balance / 100))
    }
    fetchBalance()
  }, [])

  return (
    <StyledAdminDashboardBox>
      <AdminDashBoxTitle>This {period}</AdminDashBoxTitle>
      <AdminDashBoxNumber>{sum} €</AdminDashBoxNumber>
    </StyledAdminDashboardBox>
  )
}
