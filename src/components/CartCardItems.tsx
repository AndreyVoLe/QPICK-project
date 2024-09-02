import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import {
    addToCart,
    ICart,
    removeFullCard,
    removeToCard,
} from '../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'

interface ICartItem {
    item: ICart
}

const CartCarditems = (props: ICartItem) => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const itemInCart = cart.find(cartItem => cartItem.id === props.item.id)
    const totalQuantity = props.item.price * props.item.count
    const dispatch = useDispatch()

    const handleAddClick = () => {
        dispatch(
            addToCart({
                item: props.item,
                count: 1,
            })
        )
    }

    const handleDecrease = () => {
        if (itemInCart) {
            dispatch(
                removeToCard({
                    id: props.item.id,
                    count: 1,
                })
            )
        }
    }

    const deleteItem = () => {
        dispatch(
            removeFullCard({
                id: props.item.id,
            })
        )
    }

    return (
        <>
            <section className="rounded-[30px] bg-white border w-[350px] sm:w-[500px] border-gray-300 shadow-lg px-5 pb-4 xl:w-[633px] ">
                <div className="flex justify-between">
                    <div className="flex gap-6">
                        <img
                            className=""
                            loading="lazy"
                            src={`/src/assets/${props.item.img}`}
                            width={150}
                            alt="headphone image"
                        />
                        <div className="flex flex-col justify-center gap-2 ">
                            <div className="text-lg font-medium text-gray-900">
                                {props.item.title}
                            </div>
                            <div className="font-semibold text-neutral-400">
                                {props.item.price}
                                <CurrencyRubleIcon
                                    sx={{ fontSize: 16, mb: 0.2 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <img
                            className="cursor-pointer"
                            src="/src/assets/Vector.jpg"
                            alt="backet"
                            onClick={deleteItem}
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6 ml-6">
                    <div className="flex gap-5 items-center">
                        <div>
                            <img
                                className={`${
                                    props.item.count === 1
                                        ? 'pointer-events-none opacity-60 '
                                        : 'cursor-pointer'
                                }`}
                                src="/src/assets/-.jpg"
                                alt="-"
                                onClick={handleDecrease}
                            />
                        </div>
                        <div className="font-bold">{props.item.count}</div>
                        <button>
                            <img
                                src="/src/assets/+.jpg"
                                alt="+"
                                onClick={handleAddClick}
                            />
                        </button>
                    </div>

                    <div className="font-semibold">
                        {totalQuantity}
                        <CurrencyRubleIcon
                            sx={{
                                fontSize: 16,
                                mb: 0.2,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartCarditems
