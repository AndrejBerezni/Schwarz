import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { ICartItem } from '../../../compiler/cartItemInterface'
import {
  increaseItemCountInCart,
  decreaseItemCountInCart,
  removeItemFromCart,
} from '../../../store/cart'
import { formatPrice } from '../../../utilities/formatPrice'
import Counter from '../../Counter'
import {
  CartImg,
  CartTitle,
  CartDeleteBtn,
  CartPrice,
  StyledCartProductDiv,
} from '../Cart.styles'

interface ICartProductDivProps {
  product: ICartItem
}

export default function CartProductDiv({
  product,
}: Readonly<ICartProductDivProps>) {
  const dispatch = useDispatch()

  const handleIncreaseCount = () => {
    dispatch(increaseItemCountInCart(product))
  }
  const handleDecreaseCount = () => {
    if (product.count > 1) dispatch(decreaseItemCountInCart(product))
  }

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(product))
  }
  return (
    <StyledCartProductDiv>
      <Counter
        amount={product.count}
        increment={handleIncreaseCount}
        decrement={handleDecreaseCount}
      />

      <CartImg src={product.image} />
      <div>
        <CartTitle>{product.name}</CartTitle>
        <CartPrice>{formatPrice(product.totalPrice)} €</CartPrice>
      </div>
      <CartDeleteBtn onClick={handleRemoveItem}>
        <MdDeleteForever />
      </CartDeleteBtn>
    </StyledCartProductDiv>
  )
}
