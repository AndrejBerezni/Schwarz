import {
  StyledOrderDiv,
  OrderDivProp,
  OrderDivDetail,
  OrderDivItem,
  OrderTitle,
} from './OrderDiv.styles'
import { IOrder } from '../../../compiler/orderInterface'
import { formatPrice } from '../../../utilities/formatPrice'
import { useEffect, useState } from 'react'
import { getPaymentDate } from '../../../stripe/paymentDate'

interface IOrderDivProps {
  order: IOrder
}

export default function OrderDiv({ order }: Readonly<IOrderDivProps>) {
  const [orderDate, setOrderDate] = useState<string>('')

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const paymentDate = await getPaymentDate(order.id)
        if (paymentDate) {
          setOrderDate(paymentDate)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    }
    fetchDate()
  }, [])

  return (
    <StyledOrderDiv>
      <OrderTitle>Order ID - {order.id}</OrderTitle>
      <OrderDivItem>
        <OrderDivProp>Date: </OrderDivProp>
        <OrderDivDetail>{orderDate}</OrderDivDetail>
      </OrderDivItem>
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
