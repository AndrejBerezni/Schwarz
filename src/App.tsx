import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import BrowseCategoriesSide from './components/BrowseCategories/BrowseCategoriesSide'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ResetPassword from './components/forms/ResetPassword'
import SignIn from './components/forms/SignIn'
import SignUp from './components/forms/SignUp'
import NewsletterSection from './components/NewsletterSection'
import Preloader from './components/Preloader'
import TopNavbar from './components/TopNavbar'
import { theme, GlobalStyle, MainContent } from './GlobalStyles'
import Router from './router/Routes'
import { useSelector } from 'react-redux'
import { getAuthStatus } from './store/authentication/selectors'

function App() {
  const isAuth = useSelector(getAuthStatus)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [isAuth])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TopNavbar />
      <MainContent>
        <Router />
      </MainContent>
      <Cart />
      <BrowseCategoriesSide />
      <NewsletterSection />
      <Footer />
      <SignIn />
      <SignUp />
      <ResetPassword />
      {loading && <Preloader />}
    </ThemeProvider>
  )
}

export default App
