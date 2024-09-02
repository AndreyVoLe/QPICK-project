import { createSlice } from '@reduxjs/toolkit'
import { ICart } from './cartSlice'

const initialState: { like: ICart[] } = {
    like: [],
}
export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike(state, action) {
            const { item, count } = action.payload
            const indexProduct = state.like.findIndex(i => i.id === item.id)
            if (indexProduct === -1) {
                state.like.push({ ...item, count })
            } else {
                state.like.splice(indexProduct, 1)
            }
        },
    },
})
export const { addLike } = likeSlice.actions
export default likeSlice.reducer
