import { PrimaryButton } from '../../../GlobalStyles'
import { formatPrice } from '../../../utilities/formatPrice'
import {
  StyledCartCheckoutSection,
  CartCheckoutDiv,
  CartCheckoutTotal,
} from '../Cart.styles'
import { clearCart } from '../../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { createCheckout } from '../../../stripe/checkout'
import { getAuthStatus, getUser } from '../../../store/authentication/selectors'
import { showForm } from '../../../store/authentication'
import { getCartItems } from '../../../store/cart/selectors'

interface ICartCheckoutSectionProps {
  totalPrice: number
}

export default function CartCheckoutSection({
  totalPrice,
}: Readonly<ICartCheckoutSectionProps>) {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isAuth = useSelector(getAuthStatus)
  const cartItems = useSelector(getCartItems)

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      throw new Error('Your cart is empty, please add products.')
    }
    if (!isAuth) {
      dispatch(showForm('signIn'))
      return
    }
    await createCheckout(cartItems, user.uid)
  }

  return (
    <StyledCartCheckoutSection>
      <CartCheckoutTotal>Total: {formatPrice(totalPrice)} €</CartCheckoutTotal>
      <CartCheckoutDiv>
        <PrimaryButton variant="outline" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </PrimaryButton>
        <PrimaryButton onClick={handleCheckout}>Checkout</PrimaryButton>
      </CartCheckoutDiv>
    </StyledCartCheckoutSection>
  )
}
