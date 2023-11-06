import { StyledCart, CloseCartButton, CartBackgroundImage } from './Cart.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getShowCart } from '../../store/sidebars/selectors'
import { hideSidebars } from '../../store/sidebars'
import { BsCart4 } from 'react-icons/bs'

export default function Cart() {
  const dispatch = useDispatch()
  const show = useSelector(getShowCart)
  return (
    <StyledCart show={show}>
      <CloseCartButton onClick={() => dispatch(hideSidebars())}>
        X
      </CloseCartButton>
      <CartBackgroundImage>
        <BsCart4 />
      </CartBackgroundImage>
    </StyledCart>
  )
}
