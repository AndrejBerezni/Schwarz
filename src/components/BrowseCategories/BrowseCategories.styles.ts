import { styled } from 'styled-components'

export const StyledBrowseCategories = styled.ul`
  margin: 0 30px 0 0;
  height: 400px;
  width: 300px;
  min-width: 300px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 0;
  background-color: ${(props) => props.theme.navBgColor};
  @media (max-width: 768px) {
    display: none;
  }
`

interface IStyledBrowseCategoriesSideProps {
  theme: {
    primary: string
  }
  show?: boolean
}
export const StyledBrowseCategoriesSide = styled.ul<IStyledBrowseCategoriesSideProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? '0' : '-768px')};
  width: 100%;
  background-color: ${(props) => props.theme.navBgColor};
  height: 100vh;
  z-index: 1;
  transition: left 0.6s ease-out;
  margin: 0;
  padding: 0;
  @media (min-width: 769px) {
    display: none;
  }
`

export const CloseBrowseSide = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.borderColor};
  font-weight: bold;
  font-size: 20px;
  border: none;
  transition: 0.5s;
  &: hover {
    cursor: pointer;
    transform: rotate(-180deg);
    color: ${(props) => props.theme.secondary};
  }
`

export const BrowseTitle = styled.h2`
  width: 100%;
  border-radius: 10px 10px 0 0;
  font-family: ${(props) => props.theme.headFont};
  font-size: 24px;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  width: 100%;
  height: 40px;
  text-align: center;
  padding: 5px;
  margin: 0;
`

export const BrowseSideTitle = styled(BrowseTitle)`
  width: 100vw;
  border-radius: 0;
  text-align: left;
  padding: 2px 0 0 15px;
`

export const BrowseItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-family: ${(props) => props.theme.headFont};
  background-color: transparent;
  color: ${(props) => props.theme.secondary};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.bgColor};
    padding-left: 20px;
    color: ${(props) => props.theme.primary};
  }
`
