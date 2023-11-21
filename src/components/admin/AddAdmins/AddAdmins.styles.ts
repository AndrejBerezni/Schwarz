import { styled } from 'styled-components'

export const StyledAdminCard = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.primary};
  max-width: 100%;
  background-color: ${(props) => props.theme.bgColor};
`

export const AdminCardText = styled.p`
  margin: 0;
  font-size: 20px;
`

interface IAdminCardButtonProps {
  variant?: string
}

export const AdminCardButton = styled.button<IAdminCardButtonProps>`
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => (props.variant === 'danger' ? 'red' : 'cyan')};
  padding-bottom: 0;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const AdminList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const AddNewAdmin = styled.div`
  display: flex;
  width: 300px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`
