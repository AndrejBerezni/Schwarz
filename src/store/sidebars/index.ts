import { createSlice } from '@reduxjs/toolkit'

interface ISidebarsState {
  cart: boolean
  categories: boolean
}

const initialState: ISidebarsState = {
  cart: false,
  categories: false,
}

export const sidebarsSlice = createSlice({
  name: 'sidebars',
  initialState,
  reducers: {
    showCart: (state) => {
      state.cart = true
    },
    showCategories: (state) => {
      state.categories = true
    },
    hideSidebars: () => initialState,
  },
})

export const { showCart, showCategories, hideSidebars } = sidebarsSlice.actions

export default sidebarsSlice.reducer
