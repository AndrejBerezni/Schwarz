import { FirebaseError } from 'firebase/app'
import { doc, collection, getDoc, getDocs } from 'firebase/firestore'
import { IHeroItem } from '../../compiler/heroItemInterface'
import { db } from '../firebase-firestore'
import { retrieveImageFromFirebase } from '../firebase-storage'

//Setup page item - get data from firestore and storage and merge it into array of single items
export const setupPageItems = async (docIds: string[]) => {
  try {
    const result: IHeroItem[] = []

    for (const id of docIds) {
      const docRef = doc(db, 'content', id)
      const docSnapshot = await getDoc(docRef)
      const docImage = await retrieveImageFromFirebase(id)

      if (docImage && docSnapshot.exists()) {
        const itemData = docSnapshot.data()
        const newItem = {
          title: itemData.title,
          subtitle: itemData.subtitle,
          buttonText: itemData.buttonText,
          link: itemData.link,
          img: docImage,
        }
        result.push(newItem)
      }
    }

    return result
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}

//Get all docs from content collection (used to list what can be edited)
export const getUIElements = async () => {
  try {
    const elementsArr: string[] = []
    const contentRef = collection(db, 'content')
    const contentSnap = await getDocs(contentRef)
    contentSnap.forEach((doc) => elementsArr.push(doc.id))

    return elementsArr
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}
