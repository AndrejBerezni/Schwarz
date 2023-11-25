import { StyledTableHeadRow, StyledTableHeadCell } from '../AdminOrders.styles'

export default function OrdersTableHeader() {
  return (
    <StyledTableHeadRow>
      <StyledTableHeadCell>Order ID</StyledTableHeadCell>
      <StyledTableHeadCell>Amount</StyledTableHeadCell>
      <StyledTableHeadCell>Currency</StyledTableHeadCell>
      <StyledTableHeadCell>Status</StyledTableHeadCell>
      <StyledTableHeadCell>Customer</StyledTableHeadCell>
      <StyledTableHeadCell>Date</StyledTableHeadCell>
    </StyledTableHeadRow>
  )
}
