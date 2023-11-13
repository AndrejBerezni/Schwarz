import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()
  return (
    <StyledProductCard onClick={() => navigate(`/products/${product.docId}`)}>
      <ProductCardBadgeContainer>
        {product.metadata.new === '1' && (
          <ProductCardBadge>NEW</ProductCardBadge>
        )}
      </ProductCardBadgeContainer>
      <ProductCardImg src={product.images[0]} />
      <ProductCardText>{product.metadata.brand}</ProductCardText>
      <ProductCardText>
        {product.name.length > 25
          ? `${product.name.slice(0, 25)}...`
          : product.name}
      </ProductCardText>
      <ProductPrice>
        {`${formatPrice(product.prices[0].unit_amount / 100)} €`}
      </ProductPrice>
    </StyledProductCard>
  )
}
