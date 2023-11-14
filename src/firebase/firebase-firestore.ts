import { FirebaseError } from 'firebase/app'
import {
  doc,
  getFirestore,
  getDocs,
  getDoc,
  collection,
  query,
  where,
} from 'firebase/firestore'
import { app } from './firebase-config'
import { IPrice, IProduct } from '../compiler/productInterface'

export const db = getFirestore(app)

//Get new products

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
