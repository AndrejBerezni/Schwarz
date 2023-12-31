import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  StyledOrderDiv,
  OrderDivProp,
  OrderDivDetail,
  OrderDivItem,
  OrderTitle,
} from './OrderDiv.styles'
import { IOrder } from '../../../compiler/orderInterface'
import { displayAlert } from '../../../store/alert'
import { getPaymentDate } from '../../../stripe/payments'
import { formatPrice } from '../../../utilities/formatPrice'

interface IOrderDivProps {
  order: IOrder
}

export default function OrderDiv({ order }: Readonly<IOrderDivProps>) {
  const dispatch = useDispatch()
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
          dispatch(
            displayAlert({
              type: 'order',
              message: error.message,
            })
          )
        }
      }
    }
    fetchDate()
  }, [order.id, dispatch])

  return (
    <StyledOrderDiv>
      <OrderTitle>Order ID - {order.id}</OrderTitle>
      <OrderDivItem>
        <OrderDivProp>Date: </OrderDivProp>
        <OrderDivDetail>{orderDate}</OrderDivDetail>
      </OrderDivItem>
      <OrderDivItem>
        <OrderDivProp>Total amount: </OrderDivProp>
        <OrderDivDetail>
          {formatPrice(order.amount / 100)} {order.currency}
        </OrderDivDetail>
      </OrderDivItem>
      {order.items && (
        <OrderDivItem>
          <OrderDivProp>Items:</OrderDivProp>
          {order.items.map((item) => (
            <OrderDivDetail key={`${item.id}-oi`}>
              {item.description} - {item.quantity} x{' '}
              {formatPrice(item.price.unit_amount / 100)} {order.currency}
            </OrderDivDetail>
          ))}
        </OrderDivItem>
      )}
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
