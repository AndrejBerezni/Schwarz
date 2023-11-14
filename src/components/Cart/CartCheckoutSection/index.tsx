import { PrimaryButton } from '../../../GlobalStyles'
import { formatPrice } from '../../../utilities/formatPrice'
import {
  StyledCartCheckoutSection,
  CartCheckoutDiv,
  CartCheckoutTotal,
} from '../Cart.styles'
import { clearCart } from '../../../store/cart'
import { useDispatch } from 'react-redux'

interface ICartCheckoutSectionProps {
  totalPrice: number
}

export default function CartCheckoutSection({
  totalPrice,
}: Readonly<ICartCheckoutSectionProps>) {
  const dispatch = useDispatch()

  return (
    <StyledCartCheckoutSection>
      <CartCheckoutTotal>Total: {formatPrice(totalPrice)} €</CartCheckoutTotal>
      <CartCheckoutDiv>
        <PrimaryButton variant="outline" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </PrimaryButton>
        <PrimaryButton>Checkout</PrimaryButton>
      </CartCheckoutDiv>
    </StyledCartCheckoutSection>
  )
}
