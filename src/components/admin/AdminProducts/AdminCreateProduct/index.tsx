import { useRef, ChangeEvent, RefObject, useState, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { PrimaryButton } from '../../../../GlobalStyles'
import {
  AdminForm,
  AdminFormCol,
  AdminFormRow,
  AdminSubtitle,
  AdminLabel,
  AdminInput,
} from '../../../../pages/Admin/Admin.styles'
import { displayAlert, hideAlert } from '../../../../store/alert'
import { getAlert, getShowAlert } from '../../../../store/alert/selectors'
import { createNewProduct } from '../../../../stripe/products'
import AlertMessage from '../../../AlertMessage'
import { ReviewTextarea } from '../../../Reviews/Reviews.styles'
import { StyledSelect } from '../../AdminSettings/AdminSettings.styles'
import { AdminProductsDiv } from '../AdminProducts.styles'

export default function AdminCreateProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

  const [showDiscount, setShowDiscount] = useState<boolean>(false)

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (
      discountPriceRef.current &&
      priceRef.current!.value < discountPriceRef.current.value
    ) {
      dispatch(
        displayAlert({
          type: 'newProduct',
          message: 'Original price can not be smaller than discount price.',
        })
      )
      return
    }
    try {
      await createNewProduct({
        name: nameRef.current!.value,
        brand: brandRef.current!.value,
        description: descriptionRef.current!.value,
        discount: discountRef.current!.value,
        new: newRef.current!.value,
        collection: collectionRef.current!.value,
        material: materialRef.current!.value,
        imageUrl: imageUrlRef.current!.value,
        priceAmount: Number(priceRef.current!.value),
        discountPriceAmount: discountPriceRef.current
          ? discountPriceRef.current!.value
          : null,
        discountPriceLabel: discountLabelRef.current
          ? discountLabelRef.current!.value
          : null,
      })
      dispatch(
        displayAlert({
          type: 'newProduct',
          message: `Product successfully added!\nRedirecting to products list...`,
        })
      )
      setTimeout(() => {
        dispatch(hideAlert())
        navigate('/admin/products')
      }, 3000)
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          displayAlert({
            type: 'editProduct',
            message: error.message,
          })
        )
      }
    }
  }

  return (
    <>
      <AdminSubtitle>Add New Product</AdminSubtitle>
      <AdminForm onSubmit={(e) => handleSubmit(e)}>
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
                onChange={() =>
                  setShowDiscount(
                    discountRef.current!.value === '1' ? true : false
                  )
                }
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
          {showDiscount && (
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
                Discount label (e.g. -25%):
                <AdminInput
                  required
                  type="text"
                  maxLength={4}
                  ref={discountLabelRef}
                  onChange={(e) => handleChange(e, discountLabelRef)}
                  pattern="^-\d{1,2}%$"
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
              type="button"
              variant="outline"
              onClick={() => {
                dispatch(hideAlert())
                navigate('/admin/products')
              }}
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </AdminFormRow>
          {showAlert && alert.type === 'newProduct' && (
            <AdminFormRow>
              <AlertMessage />
            </AdminFormRow>
          )}
        </AdminFormCol>
      </AdminForm>
    </>
  )
}
