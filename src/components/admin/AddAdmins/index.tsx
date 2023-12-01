import { useEffect, useState, useRef } from 'react'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { AdminList, AdminCardButton, AddNewAdmin } from './AddAdmins.styles'
import AdminCard from './AdminCard'
import {
  addStoreAdmin,
  removeStoreAdmin,
  getAdmins,
} from '../../../firebase/admin/firebase-adminsetup'
import {
  AdminTitle,
  AdminSubtitle,
  AdminSpan,
  AdminInput,
} from '../../../pages/Admin/Admin.styles'

export default function AddAdmins() {
  const [currentAdmin, setCurrentAdmin] = useState<string>('')
  const [otherAdmins, setOtherAdmins] = useState<string[]>([])
  const [refreshList, setRefreshList] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const fetchAdmins = async () => {
      const admins = await getAdmins()
      if (admins?.currentAdmin && admins?.otherAdmins) {
        setCurrentAdmin(admins.currentAdmin)
        setOtherAdmins(admins.otherAdmins)
      }
    }
    fetchAdmins()
  }, [refreshList])

  const handleRemoveAdmin = async (email: string) => {
    await removeStoreAdmin(email)
    setRefreshList((prev) => !prev)
  }
  const handleAddAdmin = async () => {
    if (emailRef.current) {
      await addStoreAdmin(emailRef.current.value)
      emailRef.current.value = ''
      setRefreshList((prev) => !prev)
    }
  }

  return (
    <>
      <AdminTitle>Administrators</AdminTitle>
      <AdminSubtitle>
        Your account: <AdminSpan>{currentAdmin}</AdminSpan>
      </AdminSubtitle>
      <AdminSubtitle>Other admins:</AdminSubtitle>
      <AdminList>
        {otherAdmins.map((admin) => (
          <AdminCard
            key={`${admin}-ac`}
            email={admin}
            handleClick={handleRemoveAdmin}
          />
        ))}
      </AdminList>
      <AdminSubtitle>Add new admin:</AdminSubtitle>
      <AddNewAdmin>
        <AdminInput
          type="email"
          placeholder="Enter admin email address"
          ref={emailRef}
        />
        <AdminCardButton onClick={handleAddAdmin}>
          <LiaUserCheckSolid />
        </AdminCardButton>
      </AddNewAdmin>
    </>
  )
}
