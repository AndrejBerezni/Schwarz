import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Navigate } from 'react-router'
import {
  StyledMainProductCard,
  MainProductBox,
  MainProductBrand,
  MainProductTitle,
  MainProductDescription,
  MainProductAddDiv,
  MainProductPrice,
  MainProductPreviousPrice,
  MainProductImgBox,
  MainProductImg,
  MainProductFavBtn,
  MainProductTooltip,
} from './MainProductCard.styles'
import { IProduct } from '../../compiler/productInterface'
import { PrimaryButton } from '../../GlobalStyles'
import { formatPrice } from '../../utilities/formatPrice'
import Counter from '../Counter'
import { addItemToCart } from '../../store/cart'
import { ICartItem } from '../../compiler/cartItemInterface'
import { useDispatch } from 'react-redux'

interface IMainProductCardProps {
  product: IProduct
}

export default function MainProductCard({
  product,
}: Readonly<IMainProductCardProps>) {
  const dispatch = useDispatch()

  const [localWishlist, setLocalWishlist] = useState<boolean>(false)
  const handleWishlist = () => setLocalWishlist((prev) => !prev)

  const [amount, setAmount] = useState<number>(1)

  const handleIncrement = () => setAmount((prev) => prev + 1)
  const handleDecrement = () => {
    if (amount === 1) {
      return
    }
    setAmount((prev) => prev - 1)
  }

  const handleAddToCart = () => {
    const price =
      product.prices[parseInt(product.metadata.discount)].unit_amount / 100
    const totalPrice = Math.round(amount * price * 100) / 100
    const cartItem: ICartItem = {
      id: product.docId,
      name: product.name,
      price,
      totalPrice,
      priceId: product.prices[parseInt(product.metadata.discount)].priceId,
      count: amount,
      image: product.images[0],
    }

    dispatch(addItemToCart(cartItem))
    setAmount(1)
  }

  return (
    <>
      {product ? (
        <StyledMainProductCard>
          <MainProductImgBox>
            <MainProductImg src={product.images[0]} />
          </MainProductImgBox>
          <MainProductBox>
            <MainProductFavBtn onClick={handleWishlist}>
              {localWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </MainProductFavBtn>
            <MainProductTooltip>
              {localWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            </MainProductTooltip>
            <MainProductBrand>{product.metadata.brand}</MainProductBrand>
            <MainProductTitle>{product.name}</MainProductTitle>
            <MainProductDescription>
              {product.description}
            </MainProductDescription>
            <MainProductAddDiv variant="main">
              {product.metadata.discount === '1' ? (
                <>
                  <MainProductPreviousPrice>
                    {formatPrice(product.prices[0].unit_amount / 100)}€
                  </MainProductPreviousPrice>
                  <MainProductPrice>
                    {formatPrice(product.prices[1].unit_amount / 100)}€
                  </MainProductPrice>
                </>
              ) : (
                <MainProductPrice>
                  {formatPrice(product.prices[0].unit_amount / 100)}€
                </MainProductPrice>
              )}
              <MainProductAddDiv>
                <Counter
                  increment={handleIncrement}
                  decrement={handleDecrement}
                  amount={amount}
                />
                <PrimaryButton onClick={handleAddToCart}>
                  Add to cart
                </PrimaryButton>
              </MainProductAddDiv>
            </MainProductAddDiv>
          </MainProductBox>
        </StyledMainProductCard>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
