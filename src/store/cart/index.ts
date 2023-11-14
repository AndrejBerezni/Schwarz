import { createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../../compiler/cartItemInterface'
import { count } from 'firebase/firestore'

const initialState: ICartItem[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // if product is already in cart, increase amount
      if (state.some((item: ICartItem) => action.payload.id === item.id)) {
        const itemIndex = state.findIndex(
          (item) => action.payload.id === item.id
        )
        state[itemIndex].count += action.payload.count
        state[itemIndex].totalPrice =
          state[itemIndex].count * state[itemIndex].price
      } else {
        state.push(action.payload)
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.findIndex((item) => action.payload.id === item.id)
      state.splice(itemIndex, 1)
    },
    clearCart: () => initialState,
    increaseItemCountInCart: (state, action) => {
      const itemIndex = state.findIndex((item) => action.payload.id === item.id)
      state[itemIndex].count += 1
      state[itemIndex].totalPrice =
        state[itemIndex].count * state[itemIndex].price
    },
    decreaseItemCountInCart: (state, action) => {
      const itemIndex = state.findIndex((item) => action.payload.id === item.id)
      if (state[itemIndex].count > 1) {
        state[itemIndex].count -= 1
        state[itemIndex].totalPrice =
          state[itemIndex].count * state[itemIndex].price
      }
      //user will need to press delete button to remove item from cart, therefore I am not adding logic if count is equal to 1
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
