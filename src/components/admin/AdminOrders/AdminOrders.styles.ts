import { styled } from 'styled-components'

export const StyledTable = styled.table`
  background-color: ${(props) => props.theme.bgColor};
  position: relative;
  @media (max-width: 768px) {
    align-self: start;
  }
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

export const AdminLoadButton = styled.button`
  margin: 20px;
  border: none;
  background: none;
  color: ${(props) => props.theme.primary};
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  font-family: ${(props) => props.theme.textFont};
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${(props) => props.theme.textColor};
  }
`
