import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { app } from './firebase-config'
import { db } from './firebase-firestore'

//Initialize authentication
const auth = getAuth(app)

//Google sign in
const provider = new GoogleAuthProvider()

export const googleSignIn = async () => {
  try {
    const newUser = await signInWithPopup(auth, provider)
    return newUser.user.uid
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Email sign in
export const emailSignIn = async (email: string, password: string) => {
  try {
    const newUser = await signInWithEmailAndPassword(auth, email, password)
    return newUser.user.uid
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Email sign up
export const emailSignUp = async (email: string, password: string) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    return newUser.user.uid
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Sign out
export const signOutUser = () => {
  signOut(getAuth())
}

//Check if user is admin
export const checkIsAdmin = async () => {
  const email = auth.currentUser?.email
  if (email) {
    const docRef = doc(db, 'administrators', email)
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.exists()
  }
  return false
}
