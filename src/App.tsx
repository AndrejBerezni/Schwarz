import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer'
import TopNavbar from './components/TopNavbar'
import { theme, GlobalStyle, MainContent } from './GlobalStyles'
import Account from './pages/Account'
import Admin from './pages/Admin'
import Featured from './pages/Featured'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import { getAuthStatus, getUser } from './store/authentication/selectors'
import Cart from './components/Cart'
import BrowseCategoriesSide from './components/BrowseCategories/BrowseCategoriesSide'

function App() {
  const isAuth = useSelector(getAuthStatus)
  const currentUser = useSelector(getUser)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopNavbar />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Featured />} />
            <Route path="/:category" element={<ProductList />} />
          </Route>
          <Route
            path="/account"
            element={
              isAuth && !currentUser.isAdmin ? <Account /> : <Navigate to="/" />
            } //admin users do not have customer account
          />
          <Route
            path="/admin"
            element={
              isAuth && currentUser.isAdmin ? <Admin /> : <Navigate to="/" />
            } // customers can't access admin portal
          />
          <Route path="/products/:product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainContent>
      <Cart />
      <BrowseCategoriesSide />
      <Footer />
    </ThemeProvider>
  )
}

export default App
