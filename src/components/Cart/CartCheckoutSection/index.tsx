import { PrimaryButton } from '../../../GlobalStyles'
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
  return (
    <StyledCartCheckoutSection>
      <CartCheckoutTotal>Total: {formatPrice(totalPrice)} €</CartCheckoutTotal>
      <CartCheckoutDiv>
        <PrimaryButton variant="outline">Clear Cart</PrimaryButton>
        <PrimaryButton>Checkout</PrimaryButton>
      </CartCheckoutDiv>
    </StyledCartCheckoutSection>
  )
}
