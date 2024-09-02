import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slices/cartSlice'
import likeSlice from '../slices/likeSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        like: likeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
