import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './authentication/index'
import sidebarsReducer from './sidebars/index'

const reducers = combineReducers({
  authentication: authReducer,
  sidebars: sidebarsReducer,
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  reducers
)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
