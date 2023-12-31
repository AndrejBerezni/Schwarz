import { styled } from 'styled-components'

export const StyledAdminNavbar = styled.menu`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  width: 200px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.navBgColor};
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AdminNavLinkText = styled.p`
  margin: 0;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
`
export const AdminNavLinkIcon = styled.p`
  font-size: 24px;
  margin: 0;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
  }
`

interface IStyledAdminNavLinkProps {
  theme: {
    primary: string
    borderColor: string
    textColor: string
  }
  current: boolean
}

export const StyledAdminNavLink = styled.li<IStyledAdminNavLinkProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: ${(props) =>
    props.current ? props.theme.textColor : props.theme.primary};
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    > ${AdminNavLinkText} {
      transform: translateX(2px);
    }
    > ${AdminNavLinkIcon} {
      transform: scale(1.1);
    }
  }
`
