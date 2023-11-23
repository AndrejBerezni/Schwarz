import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import AddAdmins from '../components/admin/AddAdmins'
import AdminDashboard from '../components/admin/AdminDashboard'
import AdminOrders from '../components/admin/AdminOrders'
import AdminProducts from '../components/admin/AdminProducts'
import AdminProductPage from '../components/admin/AdminProducts/AdminProductPage'
import AdminProductsList from '../components/admin/AdminProducts/AdminProductsList'
import AdminSettings from '../components/admin/AdminSettings'
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
import AdminCreateProduct from '../components/admin/AdminProducts/AdminCreateProduct'

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
      >
        <Route index element={<AdminDashboard />} />
        <Route path="/admin/products" element={<AdminProducts />}>
          <Route index element={<AdminProductsList />} />
          <Route
            path="/admin/products/newproduct"
            element={<AdminCreateProduct />}
          />
          <Route
            path="/admin/products/:productId"
            element={<AdminProductPage />}
          />
        </Route>
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/admins" element={<AddAdmins />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
