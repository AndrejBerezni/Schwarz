import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PrimaryButton } from '../../../GlobalStyles'
import { hideForm } from '../../../store/authentication'
import { getAuthForm } from '../../../store/authentication/selectors'
import {
  Modal,
  ModalOuter,
  ModalContent,
  StyledForm,
  InputDiv,
  FormLabel,
  FormInput,
  CloseForm,
} from '../forms.styles'

export default function SignIn() {
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'signUp' && authForm.show

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  return (
    <Modal show={show}>
      <ModalOuter onClick={handleClose}></ModalOuter>
      <ModalContent>
        <h2>Sign Up</h2>
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
              placeholder="Create your password..."
            ></FormInput>
          </InputDiv>
          <InputDiv>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <FormInput
              id="confirmPassword"
              type="password"
              ref={confirmPasswordRef}
              required
              placeholder="Confirm password here..."
            ></FormInput>
          </InputDiv>
          <PrimaryButton>Sign Up</PrimaryButton>
        </StyledForm>
        <CloseForm onClick={handleClose}>X</CloseForm>
      </ModalContent>
    </Modal>
  )
}
