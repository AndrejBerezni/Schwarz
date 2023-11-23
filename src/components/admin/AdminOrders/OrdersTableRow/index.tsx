import { IAdminViewOrder } from '../../../../compiler/orderInterface'
import { formatPrice } from '../../../../utilities/formatPrice'
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
      <StyledTableCell>{formatPrice(order.amount / 100)}</StyledTableCell>
      <StyledTableCell>{order.currency}</StyledTableCell>
      <StyledTableCell>{order.status}</StyledTableCell>
      <StyledTableCell>{order.customer}</StyledTableCell>
      <StyledTableCell>{order.date}</StyledTableCell>
    </StyledTableRow>
  )
}
