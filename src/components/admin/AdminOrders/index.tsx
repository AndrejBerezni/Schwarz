import { useEffect, useState } from 'react'
import { IoReloadOutline } from 'react-icons/io5'
import {
  StyledTable,
  StyledTableHeadRow,
  StyledTableHeadCell,
} from './AdminOrders.styles'
import OrdersTableRow from './OrdersTableRow'
import { IAdminViewOrder } from '../../../compiler/orderInterface'
import { AdminTitle, AdminLoadButton } from '../../../pages/Admin/Admin.styles'
import { getPayments } from '../../../stripe/payments'
import Spinner from '../../Spinner'

export default function AdminOrders() {
  const [orders, setOrders] = useState<IAdminViewOrder[]>([])
  const [allOrdersShown, setAllOrdersShown] = useState<boolean>(false)

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

  const loadMoreOrders = async () => {
    const lastOrder: string = orders[orders.length - 1].orderId
    const newOrders: IAdminViewOrder[] = await getPayments(lastOrder)
    if (newOrders.length < 10) {
      setAllOrdersShown(true)
    }
    setOrders((prev) => [...prev, ...newOrders])
  }

  return (
    <>
      <AdminTitle>Orders</AdminTitle>
      <StyledTable>
        <StyledTableHeadRow>
          <StyledTableHeadCell>Order ID</StyledTableHeadCell>
          <StyledTableHeadCell>Amount</StyledTableHeadCell>
          <StyledTableHeadCell>Currency</StyledTableHeadCell>
          <StyledTableHeadCell>Status</StyledTableHeadCell>
          <StyledTableHeadCell>Customer</StyledTableHeadCell>
          <StyledTableHeadCell>Date</StyledTableHeadCell>
        </StyledTableHeadRow>
        {orders.length > 0 ? (
          orders.map((item) => <OrdersTableRow order={item} />)
        ) : (
          <Spinner />
        )}
      </StyledTable>
      {!allOrdersShown && (
        <AdminLoadButton onClick={loadMoreOrders}>
          Load more
          <IoReloadOutline />
        </AdminLoadButton>
      )}
    </>
  )
}
