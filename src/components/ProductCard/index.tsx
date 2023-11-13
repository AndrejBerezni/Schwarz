import {
  StyledProductCard,
  ProductCardImg,
  ProductCardBadgeContainer,
  ProductCardBadge,
  ProductCardText,
  ProductPrice,
} from './ProductCard.styles'
import { IProduct } from '../../compiler/productInterface'
import { formatPrice } from '../../utilities/formatPrice'

interface IProductCardProps {
  product: IProduct
}

export default function ProductCard({ product }: Readonly<IProductCardProps>) {
  return (
    <StyledProductCard>
      <ProductCardBadgeContainer>
        <ProductCardBadge>NEW</ProductCardBadge>
      </ProductCardBadgeContainer>
      <ProductCardImg src={product.images[0]} />
      {/* dont forget to limit number of characters later */}
      <ProductCardText>{product.metadata.brand}</ProductCardText>
      <ProductCardText>{product.name}</ProductCardText>
      <ProductPrice>
        {`${formatPrice(product.prices[0].unit_amount / 100)} €`}
      </ProductPrice>
    </StyledProductCard>
  )
}
