import { styled } from 'styled-components'

export const StyledAlertMessage = styled.div`
  width: 100%;
  padding: 0px 40px 0px 0px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.navBgColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
`

export const AlertCloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  right: 5px;
  top: 10px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    color: ${(props) => props.theme.borderColor};
  }
`
