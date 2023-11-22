import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import Stripe from 'stripe'
import {
  StyledAdminProductCard,
  AdminProductImg,
  AdminProductCardName,
  AdminProductCardBtn,
} from '../AdminProducts.styles'

interface IAdminProductCardProps {
  product: Stripe.Product
}

export default function AdminProductCard({
  product,
}: Readonly<IAdminProductCardProps>) {
  return (
    <StyledAdminProductCard>
      <AdminProductCardName>{product.name}</AdminProductCardName>
      <AdminProductImg src={product.images[0]} />
      <AdminProductCardBtn>
        <BsFillArrowRightSquareFill />
      </AdminProductCardBtn>
    </StyledAdminProductCard>
  )
}
