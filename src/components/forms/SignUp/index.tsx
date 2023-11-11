import { useRef } from 'react'
import { PrimaryButton } from '../../../GlobalStyles'
import {
  ModalOuter,
  ModalContent,
  StyledForm,
  InputDiv,
  FormLabel,
  FormInput,
  CloseForm,
} from '../forms.styles'

export default function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  return (
    <ModalOuter>
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
        <CloseForm>X</CloseForm>
      </ModalContent>
    </ModalOuter>
  )
}
