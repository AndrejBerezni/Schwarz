import { styled } from 'styled-components'

interface IStyledOrdersProps {
  theme: {
    navBgColor: string
    borderColor: string
  }
}

export const StyledOrders = styled.section<IStyledOrdersProps>`
  width: 100%;
  max-height: 540px;
  padding-left: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.navBgColor};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.navBgColor};
  }
`
