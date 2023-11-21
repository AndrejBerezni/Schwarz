import { AdminTitle } from '../../../pages/Admin/Admin.styles'
import { useEffect, useState } from 'react'
import { IAdminViewOrder } from '../../../compiler/orderInterface'
import { getPayments } from '../../../stripe/payments'

export default function AdminOrders() {
  const [orders, setOrders] = useState<IAdminViewOrder[]>([])
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const newOrders: IAdminViewOrder[] = await getPayments()
        if (newOrders) {
          setOrders(newOrders)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    }
    fetchOrders()
  }, [])

  return (
    <>
      <AdminTitle>Orders</AdminTitle>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Amount</th>
          <th>Currency</th>
          <th>Status</th>
          <th>Customer</th>
          <th>Date</th>
        </tr>
        {/* {orders.length > 0 && orders.map(item =>)} */}
      </table>
    </>
  )
}
