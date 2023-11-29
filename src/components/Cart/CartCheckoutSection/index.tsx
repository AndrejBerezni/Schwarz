import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton } from '../../../GlobalStyles'
import { showForm } from '../../../store/authentication'
import { getAuthStatus, getUser } from '../../../store/authentication/selectors'
import { clearCart } from '../../../store/cart'
import { getCartItems } from '../../../store/cart/selectors'
import { createCheckout } from '../../../stripe/checkout'
import { formatPrice } from '../../../utilities/formatPrice'
import {
  StyledCartCheckoutSection,
  CartCheckoutDiv,
  CartCheckoutTotal,
} from '../Cart.styles'

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
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      return
    }
    if (!isAuth) {
      dispatch(showForm('signIn'))
      return
    }
    setButtonDisabled(true)
    await createCheckout(cartItems, user.uid)
  }

  return (
    <StyledCartCheckoutSection>
      <CartCheckoutTotal>Total: {formatPrice(totalPrice)} €</CartCheckoutTotal>
      <CartCheckoutDiv>
        <PrimaryButton
          variant="outline"
          onClick={() => dispatch(clearCart())}
          disabled={cartItems.length === 0}
        >
          Clear Cart
        </PrimaryButton>
        <PrimaryButton
          onClick={handleCheckout}
          disabled={buttonDisabled || cartItems.length === 0}
        >
          {buttonDisabled ? 'Redirecting...' : 'Checkout'}
        </PrimaryButton>
      </CartCheckoutDiv>
    </StyledCartCheckoutSection>
  )
}
