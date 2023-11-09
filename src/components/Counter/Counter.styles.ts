import { styled } from 'styled-components'

export const StyledCounter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  gap: 10px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
`

export const CounterValue = styled.div``

interface ICounterBtnProps {
  theme: {
    navBgColor: string
    primary: string
    secondaryText: string
  }
  disabled?: boolean
}
export const CounterBtn = styled.button<ICounterBtnProps>`
  border: none;
  color: ${(props) => props.theme.navBgColor};
  font-weight: bold;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? props.theme.secondaryText : props.theme.primary};
  font-size: 1rem;
  transition: 0.3s;
  &:hover {
    ${(props) =>
      props.disabled
        ? ''
        : `
    transform: translateY(-2px);
    cursor: pointer;`}
`
