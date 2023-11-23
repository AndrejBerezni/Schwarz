import { IAdminViewOrder } from '../../../../compiler/orderInterface'
import { StyledTableRow, StyledTableCell } from '../AdminOrders.styles'
import { formatPrice } from '../../../../utilities/formatPrice'
interface IOrdersTableRowProps {
  order: IAdminViewOrder
}

export default function OrdersTableRow({
  order,
}: Readonly<IOrdersTableRowProps>) {
  return (
    <StyledTableRow>
      <StyledTableCell>{order.orderId}</StyledTableCell>
      <StyledTableCell>{formatPrice(order.amount / 100)}</StyledTableCell>
      <StyledTableCell>{order.currency}</StyledTableCell>
      <StyledTableCell>{order.status}</StyledTableCell>
      <StyledTableCell>{order.customer}</StyledTableCell>
      <StyledTableCell>{order.date}</StyledTableCell>
    </StyledTableRow>
  )
}
