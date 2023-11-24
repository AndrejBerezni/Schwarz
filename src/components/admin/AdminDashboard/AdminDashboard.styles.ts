import { styled } from 'styled-components'

export const AdminDashboardCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const AdminDashboardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;
`

export const StyledAdminDashboardBox = styled(AdminDashboardCol)`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  background: linear-gradient(to bottom, #222222, #111111, #000000);
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  width: 260px;
  padding: 40px 10px;
`

export const AdminDashBoxTitle = styled.h6`
  text-transform: capitalize;
  font-size: 16px;
  margin: 0;
`

export const AdminDashBoxNumber = styled.p`
  font-size: 24px;
  margin: 0;
  color: ${(props) => props.theme.primary};
`
