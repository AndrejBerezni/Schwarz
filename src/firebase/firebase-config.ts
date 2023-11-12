// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE__FIREBASE_apiKey,
  authDomain: 'schwarzluxurywatches.firebaseapp.com',
  projectId: 'schwarzluxurywatches',
  storageBucket: 'schwarzluxurywatches.appspot.com',
  messagingSenderId: '1014440496602',
  appId: '1:1014440496602:web:90aa95d338d58de56284e3',
  measurementId: 'G-ZP4CP4JZZG',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
