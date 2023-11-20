import {
  addStoreAdmin,
  removeStoreAdmin,
  getAdmins,
} from '../../../firebase/admin/firebase-adminsetup'
import { useEffect, useState } from 'react'

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
      <h1>Add Admins</h1>
      <p>Your account: {currentAdmin}</p>
      <p>Other admins: {otherAdmins}</p>
    </>
  )
}
