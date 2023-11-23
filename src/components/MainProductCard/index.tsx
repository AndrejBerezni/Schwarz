import { useState, useEffect } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
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
import { ICartItem } from '../../compiler/cartItemInterface'
import { IProduct } from '../../compiler/productInterface'
import {
  addToWishlist,
  removeFromWishlist,
  checkWishlist,
} from '../../firebase/firebase-firestore'
import { PrimaryButton } from '../../GlobalStyles'
import { getUser, getAuthStatus } from '../../store/authentication/selectors'
import { addItemToCart } from '../../store/cart'
import { convertProductToCartItem } from '../../utilities/convertProductToCartItem'
import { formatPrice } from '../../utilities/formatPrice'
import Counter from '../Counter'

interface IMainProductCardProps {
  product: IProduct
}

export default function MainProductCard({
  product,
}: Readonly<IMainProductCardProps>) {
  const dispatch = useDispatch()
  const user = useSelector(getUser)
  const isAuth = useSelector(getAuthStatus)

  // handling wishlist
  const [localWishlist, setLocalWishlist] = useState<boolean>(false)

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      const isOnWishlist = await checkWishlist(user.uid, product)
      setLocalWishlist(isOnWishlist)
    }
    fetchWishlistStatus()
  }, [user.uid, product])

  const handleWishlistAdd = async () => {
    await addToWishlist(user.uid, product)
    setLocalWishlist(true)
  }
  const handleWishlistRemove = async () => {
    await removeFromWishlist(user.uid, product)
    setLocalWishlist(false)
  }
  // handling adding to cart
  const [amount, setAmount] = useState<number>(1)
  const handleIncrement = () => setAmount((prev) => prev + 1)
  const handleDecrement = () => {
    if (amount === 1) {
      return
    }
    setAmount((prev) => prev - 1)
  }
  const handleAddToCart = () => {
    const cartItem: ICartItem = convertProductToCartItem(product, amount)
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
            {isAuth && !user.isAdmin && (
              <>
                <MainProductFavBtn>
                  {localWishlist ? (
                    <AiFillHeart onClick={handleWishlistRemove} />
                  ) : (
                    <AiOutlineHeart onClick={handleWishlistAdd} />
                  )}
                </MainProductFavBtn>
                <MainProductTooltip>
                  {localWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                </MainProductTooltip>
              </>
            )}
            <MainProductBrand>{product.metadata.brand}</MainProductBrand>
            <MainProductTitle>{product.name}</MainProductTitle>
            <MainProductDescription>
              {product.description}
            </MainProductDescription>
            <MainProductAddDiv variant="main">
              {product.metadata.discount === '1' ? (
                <>
                  <MainProductPreviousPrice>
                    {formatPrice(
                      product.prices.filter(
                        (price) => price.description === null
                      )[0].unit_amount / 100
                    )}
                    €
                  </MainProductPreviousPrice>
                  <MainProductPrice>
                    {formatPrice(
                      product.prices.filter(
                        (price) => price.description !== null
                      )[0].unit_amount / 100
                    )}
                    €
                  </MainProductPrice>
                </>
              ) : (
                <MainProductPrice>
                  {formatPrice(
                    product.prices.filter(
                      (price) => price.description === null
                    )[0].unit_amount / 100
                  )}
                  €
                </MainProductPrice>
              )}
              {!user.isAdmin && (
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
              )}
            </MainProductAddDiv>
          </MainProductBox>
        </StyledMainProductCard>
      ) : (
        <Navigate to="/404" />
      )}
    </>
  )
}
