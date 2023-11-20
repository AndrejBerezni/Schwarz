import { StyledAlertMessage, AlertCloseBtn } from './AlertMessage.styles'
import { IoMdCloseCircle } from 'react-icons/io'

interface IAlertMessageProps {
  message: string
}

export default function AlertMessage({
  message,
}: Readonly<IAlertMessageProps>) {
  return (
    <StyledAlertMessage>
      <p>{message}</p>
      <AlertCloseBtn>
        <IoMdCloseCircle />
      </AlertCloseBtn>
    </StyledAlertMessage>
  )
}
