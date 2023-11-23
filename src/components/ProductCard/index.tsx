import { useNavigate } from 'react-router'
import {
  StyledProductCard,
  ProductCardImg,
  ProductCardBadgeContainer,
  ProductCardBadge,
  ProductCardText,
  ProductPriceDiv,
  ProductPrice,
  PreviousProductPrice,
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
        {product.metadata.discount === '1' && (
          <ProductCardBadge>
            {
              product.prices.filter((price) => price.description !== null)[0]
                .description
            }
          </ProductCardBadge>
        )}
      </ProductCardBadgeContainer>
      <ProductCardImg src={product.images[0]} />
      <ProductCardText>{product.metadata.brand}</ProductCardText>
      <ProductCardText>
        {product.name.length > 25
          ? `${product.name.slice(0, 25)}...`
          : product.name}
      </ProductCardText>
      {/* discount prices have description, and regular price does not */}
      {product.metadata.discount === '1' ? (
        <ProductPriceDiv>
          <PreviousProductPrice>
            {formatPrice(
              product.prices.filter((price) => price.description === null)[0]
                .unit_amount / 100
            )}
            €
          </PreviousProductPrice>
          <ProductPrice>
            {formatPrice(
              product.prices.filter((price) => price.description !== null)[0]
                .unit_amount / 100
            )}
            €
          </ProductPrice>
        </ProductPriceDiv>
      ) : (
        <ProductPrice>
          {formatPrice(
            product.prices.filter((price) => price.description === null)[0]
              .unit_amount / 100
          )}
          €
        </ProductPrice>
      )}
    </StyledProductCard>
  )
}
