import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Stripe from 'stripe'
import {
  AdminSubtitle,
  AdminInput,
  AdminForm,
  AdminLabel,
} from '../../../../pages/Admin/Admin.styles'
import { retrieveStripeProduct } from '../../../../stripe/products'
import { StyledSelect } from '../../AdminSettings/AdminSettings.styles'
import {
  AdminProductImg,
  AdminProductsDiv,
  StyledAdminProductPage,
} from '../AdminProducts.styles'
import { PrimaryButton } from '../../../../GlobalStyles'

export default function AdminProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState<Stripe.Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const currentProduct = await retrieveStripeProduct(productId!)
        if (currentProduct) {
          setProduct(currentProduct)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    }
    fetchProduct()
  }, [productId])

  return (
    <>
      {product && (
        <>
          <AdminSubtitle>{product.name}</AdminSubtitle>
          <StyledAdminProductPage>
            <AdminForm>
              <AdminLabel>
                Name:
                <AdminInput required type="text" value={product.name} />
              </AdminLabel>
              <AdminLabel>
                Brand:
                <AdminInput
                  required
                  type="text"
                  value={product.metadata.brand}
                />
              </AdminLabel>
              <AdminProductsDiv>
                <AdminLabel>
                  On discount?
                  <StyledSelect>
                    <option
                      value="1"
                      selected={product.metadata.discount === '1'}
                    >
                      Yes
                    </option>
                    <option
                      value="0"
                      selected={product.metadata.discount === '0'}
                    >
                      No
                    </option>
                  </StyledSelect>
                </AdminLabel>
                <AdminLabel>
                  New Item?
                  <StyledSelect>
                    <option value="1" selected={product.metadata.new === '1'}>
                      Yes
                    </option>
                    <option value="0" selected={product.metadata.new === '0'}>
                      No
                    </option>
                  </StyledSelect>
                </AdminLabel>
                <AdminLabel>
                  Collection:
                  <StyledSelect>
                    <option
                      value="men"
                      selected={product.metadata.collection === 'men'}
                    >
                      Men
                    </option>
                    <option
                      value="women"
                      selected={product.metadata.collection === 'women'}
                    >
                      Women
                    </option>
                  </StyledSelect>
                </AdminLabel>
              </AdminProductsDiv>
              <AdminLabel>
                Material:
                <AdminInput
                  required
                  type="text"
                  value={product.metadata.material}
                />
              </AdminLabel>
            </AdminForm>
            <AdminForm>
              <AdminProductImg src={product.images[0]} />
              <AdminLabel>
                Image URL:
                <AdminInput required type="text" value={product.images[0]} />
              </AdminLabel>
            </AdminForm>
          </StyledAdminProductPage>
          <AdminProductsDiv>
            <PrimaryButton variant="outline">Delete Product</PrimaryButton>
            <PrimaryButton>Update Product</PrimaryButton>
          </AdminProductsDiv>
        </>
      )}
    </>
  )
}
