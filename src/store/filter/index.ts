import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IFilterState {
  men: boolean
  women: boolean
  new: boolean
  discount: boolean
}

interface IApplyFilterPayload {
  filterName: keyof IFilterState
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
    applyFilter: (state, action: PayloadAction<IApplyFilterPayload>) => {
      state[action.payload.filterName] = true
    },
    removeFilter: (state, action: PayloadAction<IApplyFilterPayload>) => {
      state[action.payload.filterName] = false
    },
    clearFilters: () => initialState,
  },
})

export const { applyFilter, removeFilter, clearFilters } = filterSlice.actions

export default filterSlice.reducer
