import { styled, createGlobalStyle } from 'styled-components'

export const theme = {
  bgColor: '#111111',
  navBgColor: '#000000',
  textColor: '#FFFFFF',
  secondaryText: '#777777',
  primary: '#ffd900',
  secondary: '#F5F5F5',
  borderColor: '#444444',
  textFont: "'Lato', sans-serif",
  headFont: "'Roboto Slab', serif",
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    min-height: 100vh;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow-x:hidden;
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
  display: flex;
  padding: 80px 30px 0;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    padding: 140px 5px 0;
  }
  @media (min-width: 1440px) {
    padding: 80px 200px 0;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  border-radius: 6px;
  border: none;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: 0.3s;
  font-family: ${(props) => props.theme.headFontFont};
  font-weight: bold;
  min-width: 120px;
  max-height: 50px;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0px 5px 5px -4px ${(props) => props.theme.primary};
  }
`

//   card - background: linear-gradient(to bottom, #333333, #222222, #111111);
