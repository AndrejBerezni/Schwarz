import { styled, createGlobalStyle } from 'styled-components'

export const theme = {
  bgColor: '#111111',
  navBgColor: '#000000',
  textColor: '#FFFFFF',
  primary: '#ffd900',
  secondary: '#F5F5F5',
  borderColor: '#444444',
  textFont: "'Lato', sans-serif",
  headFont: "'Playfair Display', serif",
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 90px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0;
}

body {
    font-family: ${(props) => props.theme.textFont};
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    margin: 0;
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

export const MainContent = styled.div`
  flex: 1;
`

//   card - background: linear-gradient(to bottom, #333333, #222222, #111111);
