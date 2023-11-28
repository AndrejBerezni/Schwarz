import { styled } from 'styled-components'

export const StyledTable = styled.table`
  background-color: ${(props) => props.theme.bgColor};
  position: relative;
  min-width: 100%;
  align-self: start;
`

export const StyledTableHeadRow = styled.tr`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
`

export const StyledTableHeadCell = styled.th`
  padding: 5px 10px;
`

export const StyledTableRow = styled.tr`
  border: 1px solid red;
  :nth-child(even) {
    background-color: ${(props) => props.theme.borderColor};
    font-weight: 600;
  }
`

export const StyledTableCell = styled.td`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 5px 10px;
`
