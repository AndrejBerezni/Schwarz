import { createSlice } from '@reduxjs/toolkit'

interface IUser {
  uid: string
  isAdmin: boolean
}

interface IAuthForm {
  type: string
  show: boolean
}

interface IAuthState {
  isAuth: boolean
  user: IUser
  authForm: IAuthForm
}

const initialState: IAuthState = {
  isAuth: true,
  user: {
    uid: '',
    isAdmin: false,
  },
  authForm: {
    type: 'signIn',
    show: true,
  },
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true
      state.user = action.payload
    },
    signOut: () => initialState,
    hideForm: (state) => {
      state.authForm = {
        type: '',
        show: false,
      }
    },
    showForm: (state, action) => {
      state.authForm = {
        type: action.payload,
        show: true,
      }
    },
  },
})

export const { signIn, signOut, hideForm, showForm } = authSlice.actions

export default authSlice.reducer
