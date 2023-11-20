import { FirebaseError } from 'firebase/app'
import { doc, getDoc } from 'firebase/firestore'
import { ICarouselItem } from '../../compiler/carouselItemInterface'
import { db } from '../firebase-firestore'
import { retrieveImageFromFirebase } from '../firebase-storage'

//Setup carousel - get data from firestore and storage and merge it into array of single items
export const setupCarousel = async () => {
  try {
    const result: ICarouselItem[] = []
    const docIds = ['carousel1', 'carousel2', 'carousel3']

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
