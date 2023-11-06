import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './GlobalStyles'
import TopNavbar from './components/TopNavbar'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Featured from './pages/Featured'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import { getAuthStatus } from './store/authentication/selectors'
import { getUser } from './store/authentication/selectors'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector(getAuthStatus)
  const currentUser = useSelector(getUser)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Featured />} />
          <Route path="/:category" element={<ProductList />} />
        </Route>
        <Route
          path="/account"
          element={
            isAuth && !currentUser.isAdmin ? <Account /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin"
          element={
            isAuth && currentUser.isAdmin ? <Admin /> : <Navigate to="/" />
          }
        />
        <Route path="/products/:product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
