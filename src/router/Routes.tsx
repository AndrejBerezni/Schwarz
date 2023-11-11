import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Orders from '../components/Orders'
import Wishlist from '../components/Wishlist'
import Account from '../pages/Account'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Product from '../pages/Product'
import ProductList from '../pages/ProductList'
import { getAuthStatus, getUser } from '../store/authentication/selectors'

export default function Router() {
  const isAuth = useSelector(getAuthStatus)
  const currentUser = useSelector(getUser)
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Hero />} />
        <Route path="/:category" element={<ProductList />} />
      </Route>
      <Route
        path="/account"
        element={
          isAuth && !currentUser.isAdmin ? <Account /> : <Navigate to="/" />
        } //admin users do not have customer account
      >
        <Route index element={<Orders />} />
        <Route path="/account/wishlist" element={<Wishlist />} />
      </Route>
      <Route
        path="/admin"
        element={
          isAuth && currentUser.isAdmin ? <Admin /> : <Navigate to="/" />
        } // customers can't access admin portal
      />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
