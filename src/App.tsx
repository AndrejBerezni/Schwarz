import { ThemeProvider } from 'styled-components'
import BrowseCategoriesSide from './components/BrowseCategories/BrowseCategoriesSide'
import Cart from './components/Cart'
import Footer from './components/Footer'
import SignIn from './components/forms/SignIn'
import SignUp from './components/forms/SignUp'
import NewsletterSection from './components/NewsletterSection'
import TopNavbar from './components/TopNavbar'
import { theme, GlobalStyle, MainContent } from './GlobalStyles'
import Router from './router/Routes'

function App() {
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
    </ThemeProvider>
  )
}

export default App
