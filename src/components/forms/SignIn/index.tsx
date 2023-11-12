import { useRef, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  emailSignIn,
  googleSignIn,
} from '../../../firebase/firebase-authentication'
import { PrimaryButton } from '../../../GlobalStyles'
import { showForm, hideForm, signIn } from '../../../store/authentication'
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
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'signIn' && authForm.show

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  const redirectToSignUp = () => {
    dispatch(hideForm())
    dispatch(showForm('signUp'))
  }

  const handleEmailSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const userId = await emailSignIn(
        emailRef.current!.value.trim().toLowerCase(),
        passwordRef.current!.value
      )
      dispatch(
        signIn({
          user: userId,
          isAdmin: false,
        })
      )
      dispatch(hideForm())
      navigate('/account')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const userId = await googleSignIn()
      dispatch(
        signIn({
          user: userId,
          isAdmin: false,
        })
      )
      dispatch(hideForm())
      navigate('/account')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <Modal show={show}>
      <ModalOuter onClick={handleClose}></ModalOuter>
      <ModalContent>
        <h2>Sign In To Continue</h2>
        <StyledForm onSubmit={handleEmailSignIn}>
          <InputDiv>
            <FormLabel htmlFor="emailSI">Email</FormLabel>
            <FormInput
              id="emailSI"
              type="email"
              ref={emailRef}
              required
              placeholder="Enter your email here..."
            ></FormInput>
          </InputDiv>
          <InputDiv>
            <FormLabel htmlFor="passwordSI">Password</FormLabel>
            <FormInput
              id="passwordSI"
              type="password"
              ref={passwordRef}
              required
              placeholder="Enter your password here..."
            ></FormInput>
            <FormLink>Forgot password?</FormLink>
          </InputDiv>
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </StyledForm>
        <p>
          Don't have an account?{' '}
          <FormLink onClick={redirectToSignUp}>Sign up</FormLink>
        </p>
        <p>or</p>
        <PrimaryButton variant="outline" onClick={handleGoogleSignIn}>
          Sign In with Google
        </PrimaryButton>
        <CloseForm onClick={handleClose}>X</CloseForm>
      </ModalContent>
    </Modal>
  )
}
