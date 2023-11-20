import { createSlice } from '@reduxjs/toolkit'

interface IAlertState {
  showAlert: boolean
  alert: {
    type: string
    message: string
  }
}

const initialState: IAlertState = {
  showAlert: false,
  alert: {
    type: '',
    message: '',
  },
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.showAlert = true
      state.alert = action.payload
    },
    hideAlert: () => initialState,
  },
})

export const { displayAlert, hideAlert } = alertSlice.actions

export default alertSlice.reducer
