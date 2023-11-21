import { IAdminViewOrder } from '../../../../compiler/orderInterface'
import { StyledTableRow, StyledTableCell } from '../AdminOrders.styles'

interface IOrdersTableRowProps {
  order: IAdminViewOrder
}

export default function OrdersTableRow({
  order,
}: Readonly<IOrdersTableRowProps>) {
  return (
    <StyledTableRow>
      <StyledTableCell>{order.orderId}</StyledTableCell>
      <StyledTableCell>{order.amount}</StyledTableCell>
      <StyledTableCell>{order.currency}</StyledTableCell>
      <StyledTableCell>{order.status}</StyledTableCell>
      <StyledTableCell>{order.customer}</StyledTableCell>
      <StyledTableCell>{order.date}</StyledTableCell>
    </StyledTableRow>
  )
}
