import { BiCartAdd } from 'react-icons/bi'
import { FaHeartCircleMinus } from 'react-icons/fa6'
import {
  StyledWishlistItem,
  WishlistItemImg,
  WishlistItemText,
  WishlistItemDiv,
  WishlistItemBtn,
  WishlistTooltip,
} from './WishlistItem.styles'
import { IProduct } from '../../../compiler/productInterface'
import { formatPrice } from '../../../utilities/formatPrice'
import { useDispatch } from 'react-redux'
import { ICartItem } from '../../../compiler/cartItemInterface'
import { addItemToCart } from '../../../store/cart'
import { convertProductToCartItem } from '../../../utilities/convertProductToCartItem'

interface IWishlistItemProps {
  product: IProduct
}

export default function WishlistItem({
  product,
}: Readonly<IWishlistItemProps>) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const cartItem: ICartItem = convertProductToCartItem(product, 1)
    dispatch(addItemToCart(cartItem))
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
        <WishlistItemBtn>
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
