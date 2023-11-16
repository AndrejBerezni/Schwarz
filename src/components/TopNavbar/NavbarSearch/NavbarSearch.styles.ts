import { styled } from 'styled-components'

export const SearchResultsBox = styled.ul`
  height: fit-content;
  max-height: 300px;
  width: 100%;
  position: absolute;
  top: 100%;
  list-style: none;
  padding-left: 0;
  margin: 0;
  overflow-y: scroll;
  z-index: 2;
  border: none;
  border-radius: 0 0 5px 5px;
  background: ${(props) => props.theme.textColor};
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.textColor};
    border-left: 1px solid ${(props) => props.theme.navBgColor};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${(props) => props.theme.borderColor};
    border-left: 1px solid ${(props) => props.theme.navBgColor};
  }
`

export const SearchImg = styled.img`
  max-height: 60px;
`

export const SearchResultDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const SearchResultArrow = styled.div`
  visibility: hidden;
  font-size: 20px;
`

export const SearchResult = styled.li`
  width: 100%;
  background-color: white;
  color: ${(props) => props.theme.navBgColor};
  font-weight: 600;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background: transparent;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.bgColor};
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 5px;
    color: ${(props) => props.theme.primary};
    ${SearchResultArrow} {
      visibility: visible;
    }
  }
`
