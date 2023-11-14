import {
  StyledOrderDiv,
  OrderDivProp,
  OrderDivDetail,
  OrderDivItem,
} from './OrderDiv.styles'
import { IOrder } from '../../../compiler/orderInterface'
import { formatPrice } from '../../../utilities/formatPrice'

interface IOrderDivProps {
  order: IOrder
}

export default function OrderDiv({ order }: Readonly<IOrderDivProps>) {
  return (
    <StyledOrderDiv>
      <OrderDivItem>
        <OrderDivProp>Amount spent: </OrderDivProp>
        <OrderDivDetail>
          {formatPrice(order.amount / 100)} {order.currency}
        </OrderDivDetail>
      </OrderDivItem>
      <OrderDivItem>
        <OrderDivProp>Items:</OrderDivProp>
        {order.items.map((item) => (
          <OrderDivDetail>
            {item.description} - {item.quantity} x{' '}
            {formatPrice(item.price.unit_amount / 100)} {order.currency}
          </OrderDivDetail>
        ))}
      </OrderDivItem>
      <OrderDivItem>
        <OrderDivProp>Payment Method:</OrderDivProp>
        <OrderDivDetail> {order.payment_method_types[0]}</OrderDivDetail>
      </OrderDivItem>
      <OrderDivItem>
        <OrderDivProp>Status:</OrderDivProp>
        <OrderDivDetail> {order.status}</OrderDivDetail>
      </OrderDivItem>
    </StyledOrderDiv>
  )
}
