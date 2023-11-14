import { createSlice } from '@reduxjs/toolkit'
import { ICartItem } from '../../compiler/cartItemInterface'
import { calculateTotalPrice } from '../../utilities/calculateTotalPrice'

interface ICartState {
  items: ICartItem[]
  total: number
}

const initialState: ICartState = {
  items: [],
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // if product is already in cart, increase amount
      if (
        state.items.some((item: ICartItem) => action.payload.id === item.id)
      ) {
        const itemIndex = state.items.findIndex(
          (item) => action.payload.id === item.id
        )
        state.items[itemIndex].count += action.payload.count
        state.items[itemIndex].totalPrice =
          state.items[itemIndex].count * state.items[itemIndex].price
        state.total = calculateTotalPrice(state.items)
      } else {
        state.items.push(action.payload)
        state.total = calculateTotalPrice(state.items)
      }
    },
    removeItemFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.id === item.id
      )
      state.items.splice(itemIndex, 1)
      state.total = calculateTotalPrice(state.items)
    },
    clearCart: () => initialState,
    increaseItemCountInCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.id === item.id
      )
      state.items[itemIndex].count += 1
      state.items[itemIndex].totalPrice =
        state.items[itemIndex].count * state.items[itemIndex].price
      state.total = calculateTotalPrice(state.items)
    },
    decreaseItemCountInCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => action.payload.id === item.id
      )
      if (state.items[itemIndex].count > 1) {
        state.items[itemIndex].count -= 1
        state.items[itemIndex].totalPrice =
          state.items[itemIndex].count * state.items[itemIndex].price
        state.total = calculateTotalPrice(state.items)
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
