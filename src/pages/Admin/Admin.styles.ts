import { styled } from 'styled-components'

export const StyledAdminPage = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  gap: 40px;
`

export const StyledAdminOutlet = styled.div`
  flex: 1;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  height: 100%;
  background-color: ${(props) => props.theme.navBgColor};
`
