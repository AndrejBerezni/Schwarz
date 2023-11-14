import { createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../../compiler/cartItemInterface'

const initialState: ICartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.push(action.payload)
    },
    removeItemFromCart: (state, action) => {
      return state
    },
    clearCart: () => initialState,
    increaseItemCountInCart: (state, action) => {
      return state
    },
    decreaseItemCountInCart: (state, action) => {
      return state
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemCountInCart,
  decreaseItemCountInCart,
} = cartSlice.actions

export default cartSlice.reducer
