import { FirebaseError } from 'firebase/app'
import { app } from './firebase-config'
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage'

const storage = getStorage(app)

//Upload image
export const uploadImageToFirebase = async (
  path: string,
  imageName: string,
  imageUpload: File
) => {
  // Adding time to name, for sorting the images in the folder later
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.]/g, '')
    .replace('T', '_')
    .replace('Z', '')
  const imageNameWithTimestamp: string = `${timestamp}_${imageName}`
  const imageRef = ref(storage, `${path}/${imageNameWithTimestamp}`)
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
    console.log(image)
    console.log(imageUrl)
    return imageUrl
  } catch (error) {
    if (error instanceof FirebaseError) {
      throw new Error(error.message)
    }
  }
}
