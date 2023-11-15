import { FirebaseError } from 'firebase/app'
import {
  doc,
  getFirestore,
  getDocs,
  getDoc,
  updateDoc,
  setDoc,
  collection,
  query,
  where,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { app } from './firebase-config'
import { IOrder } from '../compiler/orderInterface'
import { IPrice, IProduct } from '../compiler/productInterface'

export const db = getFirestore(app)

// Get products
export const getProducts = async (
  metadataProp: string,
  metadataCriteria: string
): Promise<IProduct[]> => {
  const productsArray = []
  const q = query(
    collection(db, 'products'),
    where(`metadata.${metadataProp}`, '==', `${metadataCriteria}`)
  )
  const querySnapshot = await getDocs(q)

  for (const doc of querySnapshot.docs) {
    const prices: IPrice[] = []
    const priceQuery = collection(db, 'products', doc.id, 'prices')
    const priceSnapshot = await getDocs(priceQuery)

    priceSnapshot.forEach((item) => {
      const priceObject: IPrice = item.data() as IPrice
      priceObject.priceId = item.id
      prices.push(priceObject)
    })

    const productData = doc.data()
    productData.prices = prices
    productData.docId = doc.id

    productsArray.push(productData as IProduct)
  }

  return productsArray
}

// Get single product
export const getSingleProduct = async (docId: string) => {
  try {
    const docRef = doc(db, 'products', docId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const prices: IPrice[] = []
      const priceQuery = collection(db, 'products', docId, 'prices')
      const priceSnapshot = await getDocs(priceQuery)

      priceSnapshot.forEach((item) => {
        const priceObject: IPrice = item.data() as IPrice
        //we need priceId for handling checkout
        priceObject.priceId = item.id
        prices.push(priceObject)
      })

      const productData = docSnap.data()
      productData.prices = prices
      productData.docId = docSnap.id

      return productData
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

// Get past orders
export const getOrdersForUser = async (userId: string) => {
  const ordersArray: IOrder[] = []
  const q = query(collection(db, 'customers', userId, 'payments'))
  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => ordersArray.push(doc.data() as IOrder))

  return ordersArray
}

// Check if user has wishlist
const checkIfWishlistExists = async (userId: string): Promise<boolean> => {
  const docRef = doc(db, 'wishlist', userId)
  const docSnapshot = await getDoc(docRef)
  return docSnapshot.exists()
}

// Add product to wishlist
export const addToWishlist = async (userId: string, product: IProduct) => {
  const wishlistExists = await checkIfWishlistExists(userId)
  const wishlistRef = doc(db, 'wishlist', userId)
  if (wishlistExists) {
    await updateDoc(wishlistRef, {
      wishlist: arrayUnion(product),
    })
  } else {
    await setDoc(wishlistRef, {
      wishlist: [product],
    })
  }
}

// Remove product from wishlist
export const removeFromWishlist = async (userId: string, product: IProduct) => {
  const wishlistRef = doc(db, 'wishlist', userId)
  await updateDoc(wishlistRef, {
    wishlist: arrayRemove(product),
  })
}

// Check if product is on wishlist
export const checkWishlist = async (userId: string, product: IProduct) => {
  const hasWishlist = await checkIfWishlistExists(userId)
  if (!hasWishlist) {
    return false
  }
  const wishlistRef = doc(db, 'wishlist', userId)
  const wishlistSnap = await getDoc(wishlistRef)
  if (wishlistSnap.exists()) {
    const wishlist = wishlistSnap.data().wishlist
    return wishlist.some((item: IProduct) => item.docId === product.docId)
  } else {
    return false
  }
}
