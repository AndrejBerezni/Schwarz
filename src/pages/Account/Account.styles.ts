import { styled } from 'styled-components'

export const StyledAccountPage = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const AccountPageSection = styled.section`
  width: 55%;
  height: 600px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.navBgColor};
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`
