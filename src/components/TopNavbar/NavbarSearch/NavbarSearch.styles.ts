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
  transition: 0.5s;
`

export const SearchResultDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const SearchResultArrow = styled.div`
  visibility: hidden;
  font-size: 22px;
`

export const SearchResult = styled.li`
  width: 100%;
  background-color: white;
  min-height: 100px;
  color: ${(props) => props.theme.navBgColor};
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background: linear-gradient(to left, #ffffff, #fafafa, #e5e5e5);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: linear-gradient(to left, #222222, #111111, #000000);
    border-radius: 5px;
    font-size: 18px;
    color: ${(props) => props.theme.primary};
    ${SearchResultArrow} {
      visibility: visible;
    }
    ${SearchImg} {
      max-height: 75px;
    }
  }
`