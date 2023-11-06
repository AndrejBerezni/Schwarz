import { createGlobalStyle } from 'styled-components'

export const theme = {
  bgColor: '#000000',
  navBgColor: '#111111',
  textColor: '#FFFFFF',
  primary: '#ffd900',
  secondary: '#F5F5F5',
  borderColor: '#444444',
  textFont: "'Lato', sans-serif",
  headFont: "'Playfair Display', serif",
}

export const GlobalStyle = createGlobalStyle`
#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

* {
    box-sizing: border-box;
}

body {
    font-family: ${(props) => props.theme.textFont};
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    margin: 0;
    padding-top: 30px;
    width: 100vw;
    min-height: 100vh;
}

h1:hover,
h2:hover,
h3:hover,
h4:hover,
h5:hover,
h6:hover,
p:hover {
    cursor: default
}
`

//   card - background: linear-gradient(to bottom, #333333, #222222, #111111);
