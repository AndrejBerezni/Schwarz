import { get } from 'lodash'
import { RootState } from '..'

export const getAuthStatus = (store: RootState) =>
  get(store, 'authentication.isAuth', false)

export const getUser = (store: RootState) =>
  get(store, 'authentication.user', { uid: '', isAdmin: false })

export const getAuthForm = (store: RootState) =>
  get(store, 'authentication.authForm', { type: '', show: false })
