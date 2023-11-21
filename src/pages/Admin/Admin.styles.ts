import { styled } from 'styled-components'

export const StyledAdminPage = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledAdminOutlet = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  height: 100%;
  max-width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.navBgColor};
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 2px;
  }
`

export const AdminTitle = styled.h1`
  font-family: ${(props) => props.theme.headFont};
`

export const AdminSubtitle = styled.h2`
  align-text: start;
`

export const AdminSpan = styled.span`
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.headFont};
`

export const AdminInput = styled.input`
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 10px 5px;
  border-radius: 5px;
  width: 100%;
`
