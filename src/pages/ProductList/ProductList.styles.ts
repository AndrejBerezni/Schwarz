import { styled } from 'styled-components'

export const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 400px;
  max-height: 700px;
  overflow: auto;
  padding: 20px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
  }
  background-color: ${(props) => props.theme.navBgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`

export const ProductsTitle = styled.h2`
  text-transform: capitalize;
  font-family: ${(props) => props.theme.headFont};
  font-size: 28px;
  margin: 0px;
`
