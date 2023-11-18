import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './authentication/index'
import cartReducer from './cart/index'
import filterReducer from './filter/index'
import sidebarsReducer from './sidebars/index'

const authPersistConfig = {
  key: 'authentication',
  storage,
  blacklist: ['cart', 'filter', 'sidebars'],
}

const reducers = combineReducers({
  authentication: persistReducer(authPersistConfig, authSlice.reducer),
  sidebars: sidebarsReducer,
  cart: cartReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
