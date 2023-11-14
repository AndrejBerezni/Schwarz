import { styled } from 'styled-components'

export const StyledOrderDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  padding: 20px 0px;
  &:last-of-type {
    border: none;
  }
`

export const OrderDivItem = styled.p`
  padding-left: 20px;
  margin: 10px;
`

export const OrderDivProp = styled.span`
  color: ${(props) => props.theme.primary};
  font-size: 20px;
  text-transform: capitalize;
  text-align: start;
`

export const OrderDivDetail = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
`
