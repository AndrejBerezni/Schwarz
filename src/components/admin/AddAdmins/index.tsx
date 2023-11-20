import {
  addStoreAdmin,
  removeStoreAdmin,
  getAdmins,
} from '../../../firebase/admin/firebase-adminsetup'
import { useEffect, useState } from 'react'
import AdminCard from './AdminCard'
import {
  AdminList,
  AdminCardButton,
  AddNewAdmin,
  AddNewAdminInput,
} from './AddAdmins.styles'
import {
  AdminTitle,
  AdminSubitle,
  AdminSpan,
} from '../../../pages/Admin/Admin.styles'
import { LiaUserCheckSolid } from 'react-icons/lia'

export default function AddAdmins() {
  const [currentAdmin, setCurrentAdmin] = useState<string>('')
  const [otherAdmins, setOtherAdmins] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<boolean>(false)

  useEffect(() => {
    const fetchAdmins = async () => {
      const admins = await getAdmins()
      if (admins) {
        setCurrentAdmin(admins.currentAdmin!)
        setOtherAdmins(admins.otherAdmins)
      }
    }
    fetchAdmins()
  }, [])

  return (
    <>
      <AdminTitle>Administrators</AdminTitle>
      <AdminSubitle>
        Your account: <AdminSpan>{currentAdmin}</AdminSpan>
      </AdminSubitle>
      <AdminList>
        <AdminSubitle>Other admins:</AdminSubitle>
        {otherAdmins.map((admin) => (
          <AdminCard key={`${admin}-ac`} email={admin} />
        ))}
      </AdminList>
      <AdminSubitle>Add new admin:</AdminSubitle>
      <AddNewAdmin>
        <AddNewAdminInput
          type="email"
          placeholder="Enter admin email address"
        />
        <AdminCardButton>
          <LiaUserCheckSolid />
        </AdminCardButton>
      </AddNewAdmin>
    </>
  )
}
