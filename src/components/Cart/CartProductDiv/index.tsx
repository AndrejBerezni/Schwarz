import { MdDeleteForever } from 'react-icons/md'
import watch from '../../../assets/featuredwatch.png'
import { formatPrice } from '../../../utilities/formatPrice'
import Counter from '../../Counter'
import {
  CartImg,
  CartTitle,
  CartDeleteBtn,
  CartPrice,
  StyledCartProductDiv,
} from '../Cart.styles'

export default function CartProductDiv() {
  return (
    <StyledCartProductDiv>
      <Counter amount={1} />

      <CartImg src={watch} />
      <div>
        <CartTitle>Santos-Dumont Watch</CartTitle>
        <CartPrice>{formatPrice(28500)} €</CartPrice>
      </div>
      <CartDeleteBtn>
        <MdDeleteForever />
      </CartDeleteBtn>
    </StyledCartProductDiv>
  )
}
