import { useId, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton } from '../../../GlobalStyles'
import { getAlert, getShowAlert } from '../../../store/alert/selectors'
import { hideForm, showForm } from '../../../store/authentication'
import { getAuthForm } from '../../../store/authentication/selectors'
import AlertMessage from '../../AlertMessage'
import {
  Modal,
  ModalOuter,
  ModalContent,
  StyledForm,
  InputDiv,
  FormLabel,
  FormInput,
  CloseForm,
  FormBtnsDiv,
} from '../forms.styles'

export default function ResetPassword() {
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'resetPassword' && authForm.show
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)
  const id = useId()

  const emailRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  const redirectToSignIn = () => {
    dispatch(hideForm())
    dispatch(showForm('signIn'))
  }

  return (
    <Modal show={show}>
      <ModalOuter onClick={handleClose}></ModalOuter>
      <ModalContent>
        <h2>Reset Password</h2>
        <StyledForm>
          <InputDiv>
            <FormLabel htmlFor={id}>Email</FormLabel>

            <FormInput
              id={id}
              type="email"
              ref={emailRef}
              required
              placeholder="Enter your email here..."
            ></FormInput>
          </InputDiv>
          <FormBtnsDiv>
            <PrimaryButton
              type="button"
              onClick={redirectToSignIn}
              variant="outline"
            >
              Back to Sign In
            </PrimaryButton>
            <PrimaryButton type="submit">Send reset link</PrimaryButton>
          </FormBtnsDiv>
        </StyledForm>
        <CloseForm onClick={handleClose}>X</CloseForm>
        {showAlert && alert.type === 'signIn' && <AlertMessage />}
      </ModalContent>
    </Modal>
  )
}
