import styled from 'styled-components'

export const StyledTopNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 5px 25px;
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const StyledNavTitle = styled.h5`
  font-family: ${(props) => props.theme.headFont};
  color: ${(props) => props.theme.primary};
  font-size: x-large;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`
