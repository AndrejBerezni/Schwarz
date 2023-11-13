import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore'
import { app } from './firebase-config'

const db = getFirestore(app)

//Get new products

export const getProducts = async (
  metadataProp: string,
  metadataCriteria: string
) => {
  const productsArray: any[] = []
  const q = query(
    collection(db, 'products'),
    where(`metadata.${metadataProp}`, '==', `${metadataCriteria}`)
  )
  const querySnapshot = await getDocs(q)

  for (const doc of querySnapshot.docs) {
    const prices: any[] = []
    const priceQuery = collection(db, 'products', doc.id, 'prices')
    const priceSnapshot = await getDocs(priceQuery)

    priceSnapshot.forEach((item) => {
      prices.push(item.data())
    })

    const productData = doc.data()
    productData.prices = prices
    productData.docId = doc.id

    productsArray.push(productData)
  }

  return productsArray
}
