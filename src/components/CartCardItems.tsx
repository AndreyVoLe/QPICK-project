import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import { ICart } from '../redux/slices/cartSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'

interface ICartItem {
    item: ICart
}

const CartCarditems = (props: ICartItem) => {
    const cart = useSelector((state: RootState) => state.cart.cart)
    const itemInCart = cart.find(cartItem => cartItem.id === props.item.id)

    return (
        <>
            <section className="rounded-[30px] bg-white border border-gray-300 shadow-lg px-5 pb-4 w-[633px] ">
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
                        <img src="/src/assets/Vector.jpg" alt="backet" />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6 ml-6">
                    <div className="flex gap-5 items-center">
                        <button>
                            <img src="/src/assets/-.jpg" alt="-" />
                        </button>
                        <div className="font-bold">2</div>
                        <button>
                            <img src="/src/assets/+.jpg" alt="+" />
                        </button>
                    </div>

                    <div className="font-semibold">
                        5320
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
