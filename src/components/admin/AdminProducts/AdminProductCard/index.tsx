import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()

  return (
    <StyledAdminProductCard>
      <AdminProductCardName>{product.name}</AdminProductCardName>
      <AdminProductImg src={product.images[0]} />
      <AdminProductCardBtn
        onClick={() => navigate(`/admin/products/${product.id}`)}
      >
        <BsFillArrowRightSquareFill />
      </AdminProductCardBtn>
    </StyledAdminProductCard>
  )
}
