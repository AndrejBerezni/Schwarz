import { BiCart } from 'react-icons/bi'
import { MdAccountCircle } from 'react-icons/md'
import { RiAdminFill } from 'react-icons/ri'
import { TfiMenuAlt } from 'react-icons/tfi'
import { VscSignOut } from 'react-icons/vsc'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import NavbarSearch from './NavbarSearch'
import {
  StyledTopNavbar,
  NavTitle,
  NavDiv,
  NavButton,
  NavTooltip,
  CartItemsNumber,
} from './TopNavbar.styles'
import { signOutUser } from '../../firebase/firebase-authentication'
import { showForm, signOut } from '../../store/authentication'
import { getAuthStatus, getUser } from '../../store/authentication/selectors'
import { getCartItems } from '../../store/cart/selectors'
import { showCart, showCategories } from '../../store/sidebars'
import { calculateTotalItems } from '../../utilities/cartCalculations'

export default function TopNavbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth: boolean = useSelector(getAuthStatus)
  const user = useSelector(getUser)
  const cart = useSelector(getCartItems)

  const handleAccountPageAccess = () =>
    !isAuth
      ? dispatch(showForm('signIn'))
      : user.isAdmin
      ? navigate('/admin')
      : navigate('/account')

  const handleSignOut = () => {
    signOutUser()
    dispatch(signOut())
    navigate('/')
  }

  return (
    <StyledTopNavbar>
      <NavDiv>
        <NavTitle as={Link} to="/">
          Schwarz
        </NavTitle>
      </NavDiv>
      <NavbarSearch smallScreen={false} />
      <NavDiv>
        {!user.isAdmin && (
          <NavButton
            variant="mobile-only"
            onClick={() => dispatch(showCategories())}
          >
            <TfiMenuAlt />
          </NavButton>
        )}
        <div>
          <NavButton
            data-testid="account-nav-btn"
            onClick={handleAccountPageAccess}
          >
            {user.isAdmin ? <RiAdminFill /> : <MdAccountCircle />}
          </NavButton>
          <NavTooltip>{user.isAdmin ? 'Admin' : 'Account'}</NavTooltip>
          {user.isAdmin ? (
            <>
              <NavButton onClick={handleSignOut}>
                <VscSignOut />
              </NavButton>
              <NavTooltip>Sign Out</NavTooltip>
            </>
          ) : (
            <>
              <NavButton onClick={() => dispatch(showCart())}>
                <BiCart />
                <CartItemsNumber>{calculateTotalItems(cart)}</CartItemsNumber>
              </NavButton>
              <NavTooltip>Cart</NavTooltip>
            </>
          )}
        </div>
      </NavDiv>
      <NavbarSearch smallScreen={true} />
    </StyledTopNavbar>
  )
}
