import {
  ModalOuter,
  ModalContent,
  StyledForm,
  InputDiv,
  FormLabel,
  FormInput,
  FormLink,
} from '../forms.styles'
import { useRef } from 'react'
import { PrimaryButton } from '../../../GlobalStyles'

export default function SignIn() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  return (
    <ModalOuter>
      <ModalContent>
        <h2>Sign In</h2>
        <StyledForm>
          <InputDiv>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" ref={emailRef} required></FormInput>
          </InputDiv>
          <InputDiv>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" ref={passwordRef} required></FormInput>
            <FormLink>Forgot password?</FormLink>
          </InputDiv>
          <PrimaryButton>Sign In</PrimaryButton>
        </StyledForm>
        <p>
          Don't have an account? <FormLink>Sign up</FormLink>
        </p>
        <p>or</p>
        <PrimaryButton variant="outline">Sign In with Google</PrimaryButton>
      </ModalContent>
    </ModalOuter>
  )
}
