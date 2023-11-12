import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE__FIREBASE_apiKey,
  authDomain: import.meta.env.schwarzluxurywatches.firebaseapp.com,
  projectId: import.meta.env.VITE__FIREBASE_projectId,
  storageBucket: import.meta.env.VITE__FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE__FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE__FIREBASE_appId,
  measurementId: import.meta.env.VITE__FIREBASE_measurementId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
