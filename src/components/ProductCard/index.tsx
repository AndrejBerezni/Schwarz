import {
  StyledProductCard,
  ProductCardImg,
  ProductCardBadgeContainer,
  ProductCardBadge,
  ProductCardText,
  ProductPrice,
} from './ProductCard.styles'
import watch from '../../assets/carouselimg1.png'

export default function ProductCard() {
  return (
    <StyledProductCard>
      <ProductCardBadgeContainer>
        <ProductCardBadge>NEW</ProductCardBadge>
      </ProductCardBadgeContainer>
      <ProductCardImg src={watch} />
      {/* dont forget to limit number of characters later */}
      <ProductCardText>Cartier</ProductCardText>
      <ProductCardText>Santos-Dumont Watch</ProductCardText>
      <ProductPrice>3,900.00 €</ProductPrice>
    </StyledProductCard>
  )
}
