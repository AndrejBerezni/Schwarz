import { createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../../compiler/cartItemInterface'

const initialState: ICartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    removeItem: (state, action) => {
      return state
    },
    clearCart: () => initialState,
    increaseItemCount: (state, action) => {
      return state
    },
    decreaseItemCount: (state, action) => {
      return state
    },
  },
})

export const { addItem, removeItem, clearCart, decreaseItemCount } =
  cartSlice.actions

export default cartSlice.reducer
