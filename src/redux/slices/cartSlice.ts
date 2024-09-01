import { createSlice } from '@reduxjs/toolkit'
import { IHeadphones } from '../../data.headphones'

interface ICart extends IHeadphones {
    quantity: number
}

const initialState: { cart: ICart[] } = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { item, quantity } = action.payload
            const indexCart = state.cart.findIndex(i => i.id === item.id)
            if (indexCart >= 0) {
                state.cart[indexCart].quantity += quantity
            } else {
                state.cart.push({ ...item, quantity })
            }
        },
    },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
