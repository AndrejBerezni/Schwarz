import {
  StyledMainProductCard,
  MainProductBox,
  MainProductBrand,
  MainProductTitle,
  MainProductDescription,
  MainProductAddDiv,
  MainProductPrice,
  MainProductImgBox,
  MainProductImg,
} from './MainProductCard.styles'
import { PrimaryButton } from '../../GlobalStyles'
import { Navigate } from 'react-router'
import { useState } from 'react'
import Counter from '../Counter'
import { formatPrice } from '../../utilities/formatPrice'

interface IMainProductCardProps {
  product:
    | {
        id: string
        name: string
        brand: string
        description: string
        price: number
        img: string
      }
    | undefined
} // with real data, this logic of product being undefined and navigating to 404 should be move up to Product page

export default function MainProductCard({
  product,
}: Readonly<IMainProductCardProps>) {
  const [amount, setAmount] = useState<number>(1)

  const handleIncrement = () => setAmount((prev) => prev + 1)
  const handleDecrement = () => {
    if (amount === 1) {
      return
    }
    setAmount((prev) => prev - 1)
  }
  return (
    <>
      {product ? (
        <StyledMainProductCard>
          <MainProductImgBox>
            <MainProductImg src={product.img} />
          </MainProductImgBox>
          <MainProductBox>
            <MainProductBrand>{product.brand}</MainProductBrand>
            <MainProductTitle>{product.name}</MainProductTitle>
            <MainProductDescription>
              {product.description}
            </MainProductDescription>
            <MainProductAddDiv variant="main">
              <MainProductPrice>
                {formatPrice(product.price)} €
              </MainProductPrice>
              <MainProductAddDiv>
                <Counter
                  increment={handleIncrement}
                  decrement={handleDecrement}
                  amount={amount}
                />
                <PrimaryButton>Add to cart</PrimaryButton>
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
