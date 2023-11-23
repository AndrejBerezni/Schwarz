import {
  AdminForm,
  AdminFormCol,
  AdminFormRow,
  AdminSubtitle,
  AdminLabel,
  AdminInput,
} from '../../../../pages/Admin/Admin.styles'
import { ReviewTextarea } from '../../../Reviews/Reviews.styles'
import { PrimaryButton } from '../../../../GlobalStyles'
import { useNavigate } from 'react-router'
import { useRef, ChangeEvent, RefObject, useState } from 'react'
import { AdminProductsDiv } from '../AdminProducts.styles'
import { StyledSelect } from '../../AdminSettings/AdminSettings.styles'

export default function AdminCreateProduct() {
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState<boolean>(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const brandRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)
  const discountRef = useRef<HTMLSelectElement>(null)
  const newRef = useRef<HTMLSelectElement>(null)
  const collectionRef = useRef<HTMLSelectElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const discountPriceRef = useRef<HTMLInputElement>(null)
  const discountLabelRef = useRef<HTMLInputElement>(null)
  const materialRef = useRef<HTMLInputElement>(null)
  const imageUrlRef = useRef<HTMLInputElement>(null)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ref: RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    ref.current!.value = event.target.value
  }

  return (
    <>
      <AdminSubtitle>Add New Product</AdminSubtitle>
      <AdminForm>
        <AdminFormCol>
          <AdminLabel>
            Name:
            <AdminInput
              required
              type="text"
              ref={nameRef}
              onChange={(e) => handleChange(e, nameRef)}
            />
          </AdminLabel>
          <AdminLabel>
            Brand:
            <AdminInput
              required
              type="text"
              ref={brandRef}
              onChange={(e) => handleChange(e, brandRef)}
            />
          </AdminLabel>
          <AdminLabel>
            Description:
            <ReviewTextarea
              required
              ref={descriptionRef}
              onChange={(e) => handleChange(e, descriptionRef)}
              maxLength={250}
            />
          </AdminLabel>
          <AdminProductsDiv>
            <AdminLabel>
              On discount?
              <StyledSelect
                required
                ref={discountRef}
                onChange={() => setRefresh((prev) => !prev)}
              >
                <option value="0">No</option>
                <option value="1">Yes</option>
              </StyledSelect>
            </AdminLabel>
            <AdminLabel>
              New Item?
              <StyledSelect required ref={newRef}>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </StyledSelect>
            </AdminLabel>
            <AdminLabel>
              Collection:
              <StyledSelect required ref={collectionRef}>
                <option value="women">Women</option>
                <option value="men">Men</option>
              </StyledSelect>
            </AdminLabel>
          </AdminProductsDiv>
          <AdminLabel>
            Price (EUR):
            <AdminInput
              required
              type="number"
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
                  ref={discountPriceRef}
                  onChange={(e) => handleChange(e, discountPriceRef)}
                />
              </AdminLabel>
              <AdminLabel>
                Discount label:
                <AdminInput
                  required
                  type="text"
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
              ref={materialRef}
              onChange={(e) => handleChange(e, materialRef)}
            />
          </AdminLabel>
          <AdminLabel>
            Image URL:
            <AdminInput
              required
              type="text"
              ref={imageUrlRef}
              onChange={(e) => handleChange(e, imageUrlRef)}
            />
          </AdminLabel>
          <AdminFormRow>
            <PrimaryButton
              variant="outline"
              onClick={() => navigate('/admin/products')}
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </AdminFormRow>
        </AdminFormCol>
      </AdminForm>
    </>
  )
}
