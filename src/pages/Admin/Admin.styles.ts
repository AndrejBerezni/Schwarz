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
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
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

export const AdminForm = styled.form`
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const AdminFormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const AdminLabel = styled.label`
  color: ${(props) => props.theme.secondaryText};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`
