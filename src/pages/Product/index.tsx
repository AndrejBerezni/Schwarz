import { useState, useEffect } from 'react'
import { FirebaseError } from 'firebase/app'
import { useDispatch } from 'react-redux'
import { useParams, Navigate } from 'react-router'
import { IProduct } from '../../compiler/productInterface'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import MainProductCard from '../../components/MainProductCard'
import Reviews from '../../components/Reviews'
import Spinner from '../../components/Spinner'
import { getSingleProduct } from '../../firebase/firebase-firestore'
import { hideSidebars } from '../../store/sidebars'

export default function Product() {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const currentProduct = await getSingleProduct(productId!)
        setProduct(currentProduct as IProduct)
      } catch (error) {
        if (error instanceof FirebaseError) {
          throw new Error(error.message)
        }
      }
    }
    fetchProduct()
  }, [productId])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
      onClick={() => dispatch(hideSidebars())}
    >
      {product !== null ? (
        product ? (
          <>
            <MainProductCard product={product} />
            <Reviews product={product} />
            <FeaturedCarousel
              useProductsData={{
                metadataProp: 'collection',
                metadataCriteria: product.metadata.collection,
                exclude: product.docId,
              }}
              title="Related Products"
            />
          </>
        ) : (
          <Navigate to="/404" />
        )
      ) : (
        <Spinner />
      )}
    </div>
  )
}
