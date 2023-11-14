import { BsCart4 } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import {
  StyledCart,
  CartBackgroundImage,
  CartProductsSection,
} from './Cart.styles'
import CartCheckoutSection from './CartCheckoutSection'
import CartProductDiv from './CartProductDiv'
import { getCartItems, getTotalPrice } from '../../store/cart/selectors'
import { hideSidebars } from '../../store/sidebars'
import { getShowCart } from '../../store/sidebars/selectors'
import {
  BrowseSideTitle,
  CloseBrowseSide,
} from '../BrowseCategories/BrowseCategories.styles'

export default function Cart() {
  const dispatch = useDispatch()
  const show = useSelector(getShowCart)
  const cartItems = useSelector(getCartItems)
  const total = useSelector(getTotalPrice)

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
        {cartItems.map((item) => (
          <CartProductDiv product={item} key={item.id} />
        ))}
      </CartProductsSection>
      <CartCheckoutSection totalPrice={total} />
    </StyledCart>
  )
}
