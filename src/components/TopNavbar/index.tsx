import { BiSearchAlt, BiCart } from 'react-icons/bi'
import { MdAccountCircle } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  StyledTopNavbar,
  NavTitle,
  NavDiv,
  NavSearchIcon,
  NavInput,
  NavButton,
  NavTooltip,
  CartItemsNumber,
} from './TopNavbar.styles'
import { showForm } from '../../store/authentication'
import { getAuthStatus, getUser } from '../../store/authentication/selectors'
import { showCart, showCategories } from '../../store/sidebars'
import { getCartItems } from '../../store/cart/selectors'
import { calculateTotalItems } from '../../utilities/cartCalculations'

export default function TopNavbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(getAuthStatus)
  const user = useSelector(getUser)
  const cart = useSelector(getCartItems)

  const handleAccountPageAccess = () =>
    !isAuth
      ? dispatch(showForm('signIn'))
      : user.isAdmin
      ? navigate('/admin')
      : navigate('/account')

  return (
    <StyledTopNavbar>
      <NavDiv>
        <NavTitle as={Link} to="/">
          Schwarz
        </NavTitle>
      </NavDiv>
      <NavDiv>
        <NavInput type="text" placeholder="Search for products..."></NavInput>
        <NavSearchIcon>
          <BiSearchAlt />
        </NavSearchIcon>
      </NavDiv>
      <NavDiv>
        <NavButton
          variant="mobile-only"
          onClick={() => dispatch(showCategories())}
        >
          <TfiMenuAlt />
        </NavButton>
        <div>
          <NavButton onClick={handleAccountPageAccess}>
            <MdAccountCircle />
          </NavButton>
          <NavTooltip>Account</NavTooltip>
          <NavButton onClick={() => dispatch(showCart())}>
            <BiCart />
            <CartItemsNumber>{calculateTotalItems(cart)}</CartItemsNumber>
          </NavButton>
          <NavTooltip>Cart</NavTooltip>
        </div>
      </NavDiv>
    </StyledTopNavbar>
  )
}
