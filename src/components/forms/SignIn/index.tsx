import { useRef, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  checkIsAdmin,
  emailSignIn,
  googleSignIn,
} from '../../../firebase/firebase-authentication'
import { formatFirebaseError } from '../../../firebase/formatFirebaseError'
import { PrimaryButton } from '../../../GlobalStyles'
import { displayAlert } from '../../../store/alert'
import { getShowAlert, getAlert } from '../../../store/alert/selectors'
import { showForm, hideForm, signIn } from '../../../store/authentication'
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
  FormLink,
  CloseForm,
} from '../forms.styles'

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'signIn' && authForm.show
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  const redirectToSignUp = () => {
    dispatch(hideForm())
    dispatch(showForm('signUp'))
  }

  const redirectToResetPassword = () => {
    dispatch(hideForm())
    dispatch(showForm('resetPassword'))
  }

  const handleEmailSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const userId = await emailSignIn(
        emailRef.current!.value.trim().toLowerCase(),
        passwordRef.current!.value
      )
      const isAdmin = await checkIsAdmin()
      dispatch(
        signIn({
          uid: userId,
          isAdmin,
        })
      )
      dispatch(hideForm())
      isAdmin ? navigate('/admin') : navigate('/account')
    } catch (error) {
      // TS was throwing error if I left any, unknown or nothing to define error type
      if (error instanceof Error) {
        dispatch(
          displayAlert({
            type: 'signIn',
            message: formatFirebaseError(error.message),
          })
        )
      }
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      const userId = await googleSignIn()
      const isAdmin = await checkIsAdmin()
      dispatch(
        signIn({
          uid: userId,
          isAdmin,
        })
      )
      dispatch(hideForm())
      isAdmin ? navigate('/admin') : navigate('/account')
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(
          displayAlert({
            type: 'signIn',
            message: formatFirebaseError(error.message),
          })
        )
      }
    }
  }

  return (
    <Modal show={show} data-testid="sign-in-form">
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
            <FormLink onClick={redirectToResetPassword}>
              Forgot password?
            </FormLink>
          </InputDiv>
          <PrimaryButton type="submit">Sign In</PrimaryButton>
        </StyledForm>
        <p>
          Don't have an account?{' '}
          <FormLink onClick={redirectToSignUp} data-testid="sign-up-link">
            Sign up
          </FormLink>
        </p>
        <p>or</p>
        <PrimaryButton variant="outline" onClick={handleGoogleSignIn}>
          Sign In with Google
        </PrimaryButton>
        <CloseForm onClick={handleClose}>X</CloseForm>
        {showAlert && alert.type === 'signIn' && <AlertMessage />}
      </ModalContent>
    </Modal>
  )
}
