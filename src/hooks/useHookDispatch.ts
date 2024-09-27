import { IHeadphones } from '../data.headphones'
import { useDispatch } from 'react-redux'
import { addLike } from '../redux/slices/likeSlice'
import {
    addToCart,
    removeFullCard,
    removeToCard,
} from '../redux/slices/cartSlice'

const useHookDispatch = (item: IHeadphones) => {
    const dispatch = useDispatch()

    const handleChangeLike = () => {
        dispatch(
            addLike({
                item: item,
                count: 1,
            })
        )
    }
    const handleAddClick = () => {
        dispatch(
            addToCart({
                item: item,
                count: 1,
            })
        )
    }

    const handleDecrease = () => {
        dispatch(
            removeToCard({
                id: item.id,
                count: 1,
            })
        )
    }
    const deleteItem = () => {
        dispatch(
            removeFullCard({
                id: item.id,
            })
        )
    }
    return {
        deleteItem,
        handleDecrease,
        handleAddClick,
        handleChangeLike,
    }
}

export default useHookDispatch
