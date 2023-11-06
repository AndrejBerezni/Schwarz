import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Schwarz</h1>
    </ThemeProvider>
  )
}

export default App
