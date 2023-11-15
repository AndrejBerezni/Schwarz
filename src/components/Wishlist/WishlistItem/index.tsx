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

interface IWishlistItemProps {
  product: IProduct
}

export default function WishlistItem({
  product,
}: Readonly<IWishlistItemProps>) {
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
        <WishlistItemBtn>
          <BiCartAdd />
        </WishlistItemBtn>
        <WishlistTooltip>Add to cart</WishlistTooltip>
      </WishlistItemDiv>
    </StyledWishlistItem>
  )
}
