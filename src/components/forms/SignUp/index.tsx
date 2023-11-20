import { useRef, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  emailSignUp,
  checkIsAdmin,
} from '../../../firebase/firebase-authentication'
import { formatFirebaseError } from '../../../firebase/formatFirebaseError'
import { PrimaryButton } from '../../../GlobalStyles'
import { displayAlert } from '../../../store/alert'
import { getShowAlert, getAlert } from '../../../store/alert/selectors'
import { hideForm, signIn } from '../../../store/authentication'
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
} from '../forms.styles'

export default function SignIn() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authForm = useSelector(getAuthForm)
  const show = authForm.type === 'signUp' && authForm.show
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)

  const handleClose = () => {
    dispatch(hideForm())
  }

  const handleEmailSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
      dispatch(
        displayAlert({
          type: 'signUp',
          message: 'Passwords do not match!',
        })
      )
      return
    }
    try {
      const userId = await emailSignUp(
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
      if (error instanceof Error) {
        dispatch(
          displayAlert({
            type: 'signUp',
            message: formatFirebaseError(error.message),
          })
        )
      }
    }
  }

  return (
    <Modal show={show}>
      <ModalOuter onClick={handleClose}></ModalOuter>
      <ModalContent>
        <h2>Sign Up</h2>
        <StyledForm onSubmit={handleEmailSignUp}>
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
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </StyledForm>
        <CloseForm onClick={handleClose}>X</CloseForm>
        {showAlert && alert.type === 'signUp' && <AlertMessage />}
      </ModalContent>
    </Modal>
  )
}
