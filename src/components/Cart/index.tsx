import { StyledCart } from './Cart.styles'
import { useSelector, useDispatch } from 'react-redux'
import { getShowCart } from '../../store/sidebars/selectors'
import { hideSidebars } from '../../store/sidebars'

export default function Cart() {
  const dispatch = useDispatch()
  const show = useSelector(getShowCart)
  return (
    <StyledCart show={show}>
      <button onClick={() => dispatch(hideSidebars())}>hide</button>
    </StyledCart>
  )
}
