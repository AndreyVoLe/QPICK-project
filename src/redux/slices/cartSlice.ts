import { createSlice } from '@reduxjs/toolkit'
import { IHeadphones } from '../../data.headphones'

export interface ICart extends IHeadphones {
    count: number
}

const initialState: { cart: ICart[] } = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { item, count } = action.payload
            const indexCart = state.cart.findIndex(i => i.id === item.id)
            if (indexCart >= 0) {
                state.cart[indexCart].count += count
            } else {
                state.cart.push({ ...item, count })
            }
        },
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
