import { IoMdCloseCircle } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { StyledAlertMessage, AlertCloseBtn } from './AlertMessage.styles'
import { hideAlert } from '../../store/alert'
import { getAlert } from '../../store/alert/selectors'

export default function AlertMessage() {
  const dispatch = useDispatch()
  const alert = useSelector(getAlert)

  const handleClose = () => {
    dispatch(hideAlert())
  }

  return (
    <StyledAlertMessage>
      <p>{alert.message}</p>
      <AlertCloseBtn onClick={handleClose} data-testid="alert-close-btn">
        <IoMdCloseCircle />
      </AlertCloseBtn>
    </StyledAlertMessage>
  )
}
