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
  limit,
  orderBy,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore'
import { app } from './firebase-config'
import { IOrder } from '../compiler/orderInterface'
import { IPrice, IProduct } from '../compiler/productInterface'
import { IReview } from '../compiler/reviewInterface'

export const db = getFirestore(app)

// Get products
export const getAllProducts = async (
  metadataProp: string,
  metadataCriteria: string
): Promise<IProduct[]> => {
  const productsArray = []
  const q =
    metadataCriteria === 'all'
      ? collection(db, 'products')
      : query(
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
    // Stripe API does not allow deleting prices, just setting active to false, therefore I am filtering
    // prices to active ones. Later in the component I am filtering prices to determine which ones are dicsount prices
    productData.prices = prices.filter((price) => price.active === true)
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
      productData.prices = prices.filter((price) => price.active === true)
      productData.docId = docSnap.id

      return productData
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Get product prices
export const getProductPrices = async (docId: string) => {
  try {
    const docRef = doc(db, 'products', docId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const prices: IPrice[] = []
      const priceQuery = collection(db, 'products', docId, 'prices')
      const priceSnapshot = await getDocs(priceQuery)

      priceSnapshot.forEach((item) => {
        const priceObject: IPrice = item.data() as IPrice
        priceObject.priceId = item.id
        prices.push(priceObject)
      })

      return prices.filter((price) => price.active === true)
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
  const q = query(
    collection(db, 'customers', userId, 'payments'),
    orderBy('created', 'desc')
  )
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

//Get wishlist
export const getWishlist = async (userId: string) => {
  const wishlistRef = doc(db, 'wishlist', userId)
  const wishlistSnap = await getDoc(wishlistRef)
  if (wishlistSnap.exists()) {
    return wishlistSnap.data().wishlist
  }
}

//Search products
//This search works only if search term matches start of the name or brand
//I need to find a way to query Firestore to get items that contain search term, not only that start with search term
//Furthermore, Firestore did not allow me to combine multiple where statements related to different fields, so I needed to
//write 2 queries - one for name and other for metadata.brand
export const searchProducts = async (searchTerm: string) => {
  const searchResults: IProduct[] = []
  const nameQuery = query(
    collection(db, 'products'),
    orderBy('name'),
    where('name', '>=', searchTerm.toUpperCase()),
    where('name', '<=', searchTerm.toUpperCase() + `\uf8ff`),
    limit(5)
  )
  const nameResultsSnapshot = await getDocs(nameQuery)

  for (const doc of nameResultsSnapshot.docs) {
    const productData = doc.data()
    productData.docId = doc.id
    searchResults.push(productData as IProduct)
  }

  const brandQuery = query(
    collection(db, 'products'),
    orderBy('metadata.brand'),
    where('metadata.brand', '>=', searchTerm.toLowerCase()),
    where('metadata.brand', '<=', searchTerm.toLowerCase() + `\uf8ff`),
    limit(5)
  )
  const brandResultsSnapshot = await getDocs(brandQuery)

  for (const doc of brandResultsSnapshot.docs) {
    const productData = doc.data()
    productData.docId = doc.id
    searchResults.push(productData as IProduct)
  }

  return searchResults
}

//Add review
export const addProductReview = async (
  newReview: IReview,
  productId: string
) => {
  const reviewsRef = doc(db, 'reviews', productId)
  const reviewsSnapshot = await getDoc(reviewsRef)
  try {
    if (reviewsSnapshot.exists()) {
      // I don't want to allow one user to add more than 1 review for 1 product, therefore
      // We are checking if review with the same userId already exists
      const reviewsArray = reviewsSnapshot.data().reviews
      const existingReviewIndex = reviewsArray.findIndex(
        (review: IReview) => review.userId === newReview.userId
      )
      if (existingReviewIndex !== -1) {
        reviewsArray[existingReviewIndex] = newReview

        await updateDoc(reviewsRef, {
          reviews: reviewsArray,
        })
      } else {
        await updateDoc(reviewsRef, {
          reviews: arrayUnion(newReview),
        })
      }
    } else {
      await setDoc(reviewsRef, {
        reviews: [newReview],
      })
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Get reviews
export const getProductReviews = async (productId: string) => {
  const reviewsRef = doc(db, 'reviews', productId)
  const reviewsSnapshot = await getDoc(reviewsRef)
  if (reviewsSnapshot.exists()) {
    return reviewsSnapshot.data().reviews
  } else {
    return []
  }
}
