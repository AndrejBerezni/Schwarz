import { FirebaseError } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { app } from './firebase-config'

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
