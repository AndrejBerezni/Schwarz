import { BiSearchAlt, BiCart } from 'react-icons/bi'
import { MdAccountCircle } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
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
import { showCart, showCategories } from '../../store/sidebars'

export default function TopNavbar() {
  const dispatch = useDispatch()

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
          <NavButton as={Link} to="/account">
            <MdAccountCircle />
          </NavButton>
          <NavTooltip>Account</NavTooltip>
          <NavButton onClick={() => dispatch(showCart())}>
            <BiCart />
            <CartItemsNumber>0</CartItemsNumber>
          </NavButton>
          <NavTooltip>Cart</NavTooltip>
        </div>
      </NavDiv>
    </StyledTopNavbar>
  )
}
