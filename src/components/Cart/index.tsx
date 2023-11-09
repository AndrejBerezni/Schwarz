import { BsCart4 } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  StyledCart,
  CartBackgroundImage,
  CartProductsSection,
} from './Cart.styles'
import CartCheckoutSection from './CartCheckoutSection'
import CartProductDiv from './CartProductDiv'
import { hideSidebars } from '../../store/sidebars'
import { getShowCart } from '../../store/sidebars/selectors'
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
        <CartProductDiv />
        <CartProductDiv />
        <CartProductDiv />
        <CartProductDiv />
        <CartProductDiv />
        <CartProductDiv />
        <CartProductDiv />
      </CartProductsSection>
      <CartCheckoutSection totalPrice={34500} />
    </StyledCart>
  )
}
