import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import OrderDiv from './OrderDiv'
import { OrderDivItem, OrderDivProp } from './OrderDiv/OrderDiv.styles'
import { StyledOrders } from './Orders.styled'
import { IOrder } from '../../compiler/orderInterface'
import { getOrdersForUser } from '../../firebase/firebase-firestore'
import { getShowAlert, getAlert } from '../../store/alert/selectors'
import { getUser } from '../../store/authentication/selectors'
import AlertMessage from '../AlertMessage'
import Spinner from '../Spinner'

export default function Orders() {
  const user = useSelector(getUser)
  const [orders, setOrders] = useState<IOrder[]>([])
  const [showSpinner, setShowSpinner] = useState<boolean>(false)
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

  useEffect(() => {
    setShowSpinner(true)
    const fetchOrders = async () => {
      const userOrders = await getOrdersForUser(user.uid)
      setOrders(userOrders)
      setShowSpinner(false)
    }

    fetchOrders()
  }, [user.uid])

  return (
    <StyledOrders>
      {showAlert && alert.type === 'order' && <AlertMessage />}
      {showSpinner ? (
        <Spinner />
      ) : orders.length > 0 ? (
        orders.map((order) => <OrderDiv order={order} key={order.id} />)
      ) : (
        <OrderDivItem>
          <OrderDivProp>No orders to show</OrderDivProp>
        </OrderDivItem>
      )}
    </StyledOrders>
  )
}
