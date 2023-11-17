import { createSlice } from '@reduxjs/toolkit'

export interface IFilterState {
  men: boolean
  women: boolean
  new: boolean
  discount: boolean
}

const initialState: IFilterState = {
  men: false,
  women: false,
  discount: false,
  new: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    applyFilter: (state, action) => {
      if (action.payload === 'men') {
        state.women = false
      }
      if (action.payload === 'women') {
        state.men = false
      }
      state[action.payload as keyof IFilterState] = true
    },
    removeFilter: (state, action) => {
      state[action.payload as keyof IFilterState] = false
    },
    clearFilters: () => initialState,
  },
})

export const { applyFilter, removeFilter, clearFilters } = filterSlice.actions

export default filterSlice.reducer
