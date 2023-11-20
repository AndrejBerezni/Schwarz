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
    showAlert: (state, action) => {
      state.showAlert = true
      state.alert = action.payload
    },
    hideAlert: () => initialState,
  },
})

export const { showAlert, hideAlert } = alertSlice.actions

export default alertSlice.reducer
