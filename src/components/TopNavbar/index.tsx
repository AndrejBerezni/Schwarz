import { BiSearchAlt } from 'react-icons/bi'
import { BsCartFill } from 'react-icons/bs'
import { MdAccountCircle } from 'react-icons/md'
import { TfiMenuAlt } from 'react-icons/tfi'
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
import { useDispatch } from 'react-redux'
import { showCart } from '../../store/sidebars'

export default function TopNavbar() {
  const dispatch = useDispatch()

  return (
    <StyledTopNavbar>
      <NavDiv>
        <NavTitle>Schwarz</NavTitle>
      </NavDiv>
      <NavDiv>
        <NavInput type="text" placeholder="Search for products..."></NavInput>
        <NavSearchIcon>
          <BiSearchAlt />
        </NavSearchIcon>
      </NavDiv>
      <NavDiv>
        <NavButton variant="mobile-only">
          <TfiMenuAlt />
        </NavButton>
        <div>
          <NavButton>
            <MdAccountCircle />
          </NavButton>
          <NavTooltip>Account</NavTooltip>
          <NavButton onClick={() => dispatch(showCart())}>
            <BsCartFill />
            <CartItemsNumber>0</CartItemsNumber>
          </NavButton>
          <NavTooltip>Cart</NavTooltip>
        </div>
      </NavDiv>
    </StyledTopNavbar>
  )
}
