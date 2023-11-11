import { styled } from 'styled-components'

export const ModalOuter = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000099;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.navBgColor};
  width: 600px;
  height: fit-content;
  padding: 30px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

export const StyledForm = styled.form`
  width: 100%;
`

export const InputDiv = styled.div`
  padding: 5px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10px;
`

export const FormLabel = styled.label`
  color: ${(props) => props.theme.primary};
  font-family: ${(props) => props.theme.headFont};
  margin-bottom: 5px;
`

export const FormInput = styled.input`
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  padding: 5px;
  font-size: 20px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.primary};
  width: 100%;
`

export const FormLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.secondaryText};
  transition: 0.3s;
  align-self: end;
  &:hover {
    color: ${(props) => props.theme.textColor};
    cursor: pointer;
    text-decoration: underline;
  }
`
