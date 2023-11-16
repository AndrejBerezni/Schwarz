import { BiCartAdd } from 'react-icons/bi'
import { FaHeartCircleMinus } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledWishlistItem,
  WishlistItemImg,
  WishlistItemText,
  WishlistItemDiv,
  WishlistItemBtn,
  WishlistTooltip,
} from './WishlistItem.styles'
import { ICartItem } from '../../../compiler/cartItemInterface'
import { IProduct } from '../../../compiler/productInterface'
import { removeFromWishlist } from '../../../firebase/firebase-firestore'
import { getUser } from '../../../store/authentication/selectors'
import { addItemToCart } from '../../../store/cart'
import { convertProductToCartItem } from '../../../utilities/convertProductToCartItem'
import { formatPrice } from '../../../utilities/formatPrice'

interface IWishlistItemProps {
  product: IProduct
  refreshList: () => void
}

export default function WishlistItem({
  product,
  refreshList,
}: Readonly<IWishlistItemProps>) {
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  const handleAddToCart = () => {
    const cartItem: ICartItem = convertProductToCartItem(product, 1)
    dispatch(addItemToCart(cartItem))
  }

  const handleRemoveFromWishlist = async () => {
    await removeFromWishlist(user.uid, product)
    refreshList()
  }

  return (
    <StyledWishlistItem>
      <WishlistItemDiv>
        <WishlistItemImg src={product.images[0]} />
        <WishlistItemText>{product.name}</WishlistItemText>
        <WishlistItemText>
          {formatPrice(product.prices[0].unit_amount / 100)} €
        </WishlistItemText>
      </WishlistItemDiv>
      <WishlistItemDiv>
        <WishlistItemBtn onClick={handleRemoveFromWishlist}>
          <FaHeartCircleMinus />
        </WishlistItemBtn>
        <WishlistTooltip>Remove</WishlistTooltip>
        <WishlistItemBtn onClick={handleAddToCart}>
          <BiCartAdd />
        </WishlistItemBtn>
        <WishlistTooltip>Add to cart</WishlistTooltip>
      </WishlistItemDiv>
    </StyledWishlistItem>
  )
}
