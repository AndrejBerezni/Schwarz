import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Stripe from 'stripe'
import { hideAlert } from '../../../../store/alert'
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
  const dispatch = useDispatch()

  return (
    <StyledAdminProductCard>
      <AdminProductCardName>{product.name}</AdminProductCardName>
      <AdminProductImg src={product.images[0]} />
      <AdminProductCardBtn
        onClick={() => {
          //removing alerts in case showAlert stayed true since visiting other products
          dispatch(hideAlert())
          navigate(`/admin/products/${product.id}`)
        }}
      >
        <BsFillArrowRightSquareFill />
      </AdminProductCardBtn>
    </StyledAdminProductCard>
  )
}
