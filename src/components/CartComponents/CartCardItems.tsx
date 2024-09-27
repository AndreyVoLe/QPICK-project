import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import { ICart } from '../../redux/slices/cartSlice'
import useHookDispatch from '../../hooks/useHookDispatch'

interface ICartItem {
    item: ICart
}

const CartCarditems = (props: ICartItem) => {
    const totalQuantity = props.item.price * props.item.count
    const { handleAddClick, handleDecrease, deleteItem } = useHookDispatch(
        props.item
    )

    return (
        <>
            <section className="rounded-[30px] mr-0 xs:mr-5 bg-white border w-[300px] sm:w-[500px] border-gray-300 shadow-lg px-5 pb-4 xl:w-[633px]">
                <div className="flex justify-between">
                    <div className="flex gap-6">
                        <div className="w-[150px] h-[150px]">
                            <img
                                className=""
                                loading="lazy"
                                src={`/src/assets/${props.item.img}`}
                                alt="headphone image"
                            />
                        </div>

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
