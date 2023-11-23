import {
  AdminForm,
  AdminFormCol,
  AdminFormRow,
  AdminSubtitle,
} from '../../../../pages/Admin/Admin.styles'
import { PrimaryButton } from '../../../../GlobalStyles'

export default function AdminCreateProduct() {
  return (
    <>
      <AdminSubtitle>Add New Product</AdminSubtitle>
      <AdminForm>
        <AdminFormCol>
          <AdminFormRow>
            <PrimaryButton variant="outline">Cancel</PrimaryButton>
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </AdminFormRow>
        </AdminFormCol>
      </AdminForm>
    </>
  )
}
