import { useEffect, useState, useRef, ChangeEvent, RefObject } from 'react'
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

  const [refresh, setRefresh] = useState<boolean>(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const brandRef = useRef<HTMLInputElement>(null)
  const discountRef = useRef<HTMLSelectElement>(null)
  const newRef = useRef<HTMLSelectElement>(null)
  const collectionRef = useRef<HTMLSelectElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const discountPriceRef = useRef<HTMLInputElement>(null)
  const discountLabelRef = useRef<HTMLInputElement>(null)
  const materialRef = useRef<HTMLInputElement>(null)
  const imageUrlRef = useRef<HTMLInputElement>(null)

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
  }, [productId, refresh])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    ref: RefObject<HTMLInputElement>
  ) => {
    ref.current!.value = event.target.value
  }

  return (
    <>
      {product && prices && (
        <>
          <AdminSubtitle>{product.name}</AdminSubtitle>
          <StyledAdminProductPage>
            <AdminForm>
              <AdminLabel>
                Name:
                <AdminInput
                  required
                  type="text"
                  defaultValue={product.name}
                  ref={nameRef}
                  onChange={(e) => handleChange(e, nameRef)}
                />
              </AdminLabel>
              <AdminLabel>
                Brand:
                <AdminInput
                  required
                  type="text"
                  defaultValue={product.metadata.brand}
                  ref={brandRef}
                  onChange={(e) => handleChange(e, brandRef)}
                />
              </AdminLabel>
              <AdminProductsDiv>
                <AdminLabel>
                  On discount?
                  <StyledSelect
                    defaultValue={product.metadata.discount}
                    ref={discountRef}
                    onChange={() => setRefresh((prev) => !prev)}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </StyledSelect>
                </AdminLabel>
                <AdminLabel>
                  New Item?
                  <StyledSelect
                    defaultValue={product.metadata.new}
                    ref={newRef}
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </StyledSelect>
                </AdminLabel>
                <AdminLabel>
                  Collection:
                  <StyledSelect
                    defaultValue={product.metadata.collection}
                    ref={collectionRef}
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </StyledSelect>
                </AdminLabel>
              </AdminProductsDiv>
              <AdminLabel>
                Price (EUR):
                <AdminInput
                  required
                  type="number"
                  defaultValue={prices[0].unit_amount / 100}
                  ref={priceRef}
                  onChange={(e) => handleChange(e, priceRef)}
                />
              </AdminLabel>
              {discountRef.current && discountRef.current.value === '1' && (
                <>
                  <AdminLabel>
                    Discounted price (EUR):
                    <AdminInput
                      required
                      type="number"
                      defaultValue={prices[1]?.unit_amount / 100 ?? 0}
                      ref={discountPriceRef}
                      onChange={(e) => handleChange(e, discountPriceRef)}
                    />
                  </AdminLabel>
                  <AdminLabel>
                    Discount label:
                    <AdminInput
                      required
                      type="text"
                      defaultValue={prices[1]?.description ?? ''}
                      maxLength={4}
                      ref={discountLabelRef}
                      onChange={(e) => handleChange(e, discountLabelRef)}
                    />
                  </AdminLabel>
                </>
              )}
              <AdminLabel>
                Material:
                <AdminInput
                  required
                  type="text"
                  defaultValue={product.metadata.material}
                  ref={materialRef}
                  onChange={(e) => handleChange(e, materialRef)}
                />
              </AdminLabel>
            </AdminForm>
            <AdminForm>
              <AdminProductImg src={product.images[0]} />
              <AdminLabel>
                Image URL:
                <AdminInput
                  required
                  type="text"
                  defaultValue={product.images[0]}
                  ref={imageUrlRef}
                  onChange={(e) => handleChange(e, imageUrlRef)}
                />
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
