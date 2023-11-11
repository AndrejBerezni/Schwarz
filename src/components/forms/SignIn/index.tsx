import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PrimaryButton } from '../../../GlobalStyles'
import { showForm, hideForm } from '../../../store/authentication'
import { getAuthForm } from '../../../store/authentication/selectors'
import {
  Modal,
  ModalOuter,
  ModalContent,
  StyledForm,
  InputDiv,
  FormLabel,
  FormInput,
  FormLink,
  CloseForm,
} from '../forms.styles'

export default function SignIn() {
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'signIn' && authForm.show

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  const redirectToSignUp = () => {
    dispatch(hideForm())
    dispatch(showForm('signUp'))
  }

  return (
    <Modal show={show}>
      <ModalOuter onClick={handleClose}></ModalOuter>
      <ModalContent>
        <h2>Sign In to continue</h2>
        <StyledForm>
          <InputDiv>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              ref={emailRef}
              required
              placeholder="Enter your email here..."
            ></FormInput>
          </InputDiv>
          <InputDiv>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              ref={passwordRef}
              required
              placeholder="Enter your password here..."
            ></FormInput>
            <FormLink>Forgot password?</FormLink>
          </InputDiv>
          <PrimaryButton>Sign In</PrimaryButton>
        </StyledForm>
        <p>
          Don't have an account?{' '}
          <FormLink onClick={redirectToSignUp}>Sign up</FormLink>
        </p>
        <p>or</p>
        <PrimaryButton variant="outline">Sign In with Google</PrimaryButton>
        <CloseForm onClick={handleClose}>X</CloseForm>
      </ModalContent>
    </Modal>
  )
}
