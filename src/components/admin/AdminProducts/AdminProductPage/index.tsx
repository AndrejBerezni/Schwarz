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
import { IPrice } from '../../../../compiler/productInterface'
import { getProductPrices } from '../../../../firebase/firebase-firestore'

export default function AdminProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState<Stripe.Product | null>(null)
  const [prices, setPrices] = useState<IPrice[]>([])

  useEffect(() => {
    const setupData = async () => {
      try {
        const currentProduct = await retrieveStripeProduct(productId!)
        const fetchedPrices = await getProductPrices(productId!)
        if (currentProduct && fetchedPrices) {
          setProduct(currentProduct)
          setPrices(fetchedPrices)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message)
        }
      }
    }
    setupData()
  }, [productId])

  return (
    <>
      {product && prices && (
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
                Price (EUR):
                <AdminInput
                  required
                  type="number"
                  value={prices[0].unit_amount / 100}
                />
              </AdminLabel>
              {product.metadata.discount === '1' && (
                <>
                  <AdminLabel>
                    Discounted price (EUR):
                    <AdminInput
                      required
                      type="number"
                      value={prices[1].unit_amount / 100}
                    />
                  </AdminLabel>
                  <AdminLabel>
                    Discount label:
                    <AdminInput
                      required
                      type="text"
                      value={prices[1].description!}
                      maxLength={4}
                    />
                  </AdminLabel>
                </>
              )}
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
