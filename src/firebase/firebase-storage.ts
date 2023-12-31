import { FirebaseError } from 'firebase/app'
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage'
import { app } from './firebase-config'

const storage = getStorage(app)

//Upload image
export const uploadImageToFirebase = async (
  path: string,
  imageUpload: File
) => {
  // Adding time to name, for sorting the images in the folder later
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.]/g, '')
    .replace('T', '_')
    .replace('Z', '')
  const imageRef = ref(storage, `${path}/${timestamp}`)
  await uploadBytes(imageRef, imageUpload)
}

//Retrieve image
export const retrieveImageFromFirebase = async (path: string) => {
  try {
    const folderRef = ref(storage, `${path}`)
    const imagesSnap = await listAll(folderRef)
    const sortedImages = imagesSnap.items.sort((a, b) =>
      b.name.localeCompare(a.name)
    )
    const image = sortedImages[0]
    const imageUrl = await getDownloadURL(image)
    return imageUrl
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}
