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
  isAuth: false,
  user: {
    uid: '',
    isAdmin: false,
  },
  authForm: {
    type: '',
    show: false,
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
