import { BsCart4 } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  StyledCart,
  CartBackgroundImage,
  CartProductsSection,
  CartProductDiv,
  CartCheckoutSection,
  CartCheckoutDiv,
  CartCheckoutTotal,
} from './Cart.styles'
import { PrimaryButton } from '../../GlobalStyles'
import { hideSidebars } from '../../store/sidebars'
import { getShowCart } from '../../store/sidebars/selectors'
import { formatPrice } from '../../utilities/formatPrice'
import {
  BrowseSideTitle,
  CloseBrowseSide,
} from '../BrowseCategories/BrowseCategories.styles'

export default function Cart() {
  const dispatch = useDispatch()
  const show = useSelector(getShowCart)
  return (
    <StyledCart show={show}>
      <CloseBrowseSide onClick={() => dispatch(hideSidebars())}>
        X
      </CloseBrowseSide>
      <BrowseSideTitle>Cart</BrowseSideTitle>
      <CartBackgroundImage>
        <BsCart4 />
      </CartBackgroundImage>
      <CartProductsSection>
        <CartProductDiv></CartProductDiv>
        <CartProductDiv></CartProductDiv>
        <CartProductDiv></CartProductDiv>
      </CartProductsSection>
      <CartCheckoutSection>
        <CartCheckoutTotal>Total: {formatPrice(32500)} €</CartCheckoutTotal>
        <CartCheckoutDiv>
          <PrimaryButton variant="outline">Clear Cart</PrimaryButton>
          <PrimaryButton>Checkout</PrimaryButton>
        </CartCheckoutDiv>
      </CartCheckoutSection>
    </StyledCart>
  )
}
