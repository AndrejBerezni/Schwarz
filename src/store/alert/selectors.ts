import { get } from 'lodash'
import { RootState } from '..'

export const getShowAlert = (store: RootState) =>
  get(store, 'alert.showAlert', false)

export const getAlert = (store: RootState) =>
  get(store, 'alert.alert', { type: '', message: '' })
