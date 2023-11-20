import { FirebaseError } from 'firebase/app'
import {
  collection,
  query,
  setDoc,
  doc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore'
import { auth } from '../firebase-authentication'
import { db } from '../firebase-firestore'

//Add admin
export const addStoreAdmin = async (email: string) => {
  try {
    await setDoc(doc(db, 'administrators', email), {
      uid: '',
    })
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Remove admin
export const removeStoreAdmin = async (email: string) => {
  try {
    await deleteDoc(doc(db, 'administrators', email))
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Get object with logged in admin and array of other admins
export const getAdmins = async () => {
  const adminsArr: string[] = []
  const q = query(collection(db, 'administrators'))
  try {
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => adminsArr.push(doc.id))
    const currentAdmin = auth.currentUser?.email
    return {
      currentAdmin,
      otherAdmins: adminsArr.filter((admin) => admin != currentAdmin),
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}
