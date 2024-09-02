import { createSlice } from '@reduxjs/toolkit'
import { IHeadphones } from '../../data.headphones'

export interface ICart extends IHeadphones {
    count: number
}

const initialState: { cart: ICart[] } = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
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
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeToCard(state, action) {
            const { id, count } = action.payload
            const indexProduct = state.cart.findIndex(i => i.id === id)
            if (indexProduct >= 0) {
                if (state.cart[indexProduct].count > count) {
                    state.cart[indexProduct].count -= count
                } else {
                    state.cart.splice(indexProduct, 1)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFullCard(state, action) {
            const { id } = action.payload
            const indexProduct = state.cart.findIndex(i => i.id === id)
            if (indexProduct >= 0) {
                state.cart.splice(indexProduct, 1)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
    },
})

export const { addToCart, removeToCard, removeFullCard } = cartSlice.actions
export default cartSlice.reducer
