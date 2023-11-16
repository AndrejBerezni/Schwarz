import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StyledWishlist } from './Wishlist.styles'
import WishlistItem from './WishlistItem'
import { IProduct } from '../../compiler/productInterface'
import { getWishlist } from '../../firebase/firebase-firestore'
import { getUser } from '../../store/authentication/selectors'
import { OrderDivProp, OrderDivItem } from '../Orders/OrderDiv/OrderDiv.styles'

export default function Wishlist() {
  const user = useSelector(getUser)
  const [wishlist, setWishlist] = useState<IProduct[]>([])
  const [refreshList, setRefresh] = useState<boolean>(false)

  useEffect(() => {
    const fetchWishlist = async () => {
      const newWishlist = await getWishlist(user.uid)
      setWishlist(newWishlist)
    }

    fetchWishlist()
  }, [user.uid, refreshList])

  const handleRefresh = () => {
    setRefresh((prev) => !prev)
  }
  return (
    <StyledWishlist>
      {wishlist ? (
        wishlist.map((item) => (
          <WishlistItem
            product={item}
            key={`${item.docId}-wl`}
            refreshList={handleRefresh}
          />
        ))
      ) : (
        <OrderDivItem>
          <OrderDivProp>No products added to wishlist yet</OrderDivProp>
        </OrderDivItem>
      )}
    </StyledWishlist>
  )
}
