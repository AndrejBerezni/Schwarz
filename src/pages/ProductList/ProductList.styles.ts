import { styled } from 'styled-components'

export const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
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
`
