import Grid from '@mui/material/Grid2'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import StarIcon from '@mui/icons-material/Star'
import { IHeadphones } from '../data.headphones'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store/store'
import { addToCart } from '../redux/slices/cartSlice'
import { t } from 'i18next'

interface ICard {
    item: IHeadphones
}

const CardHeadPhone = (props: ICard): JSX.Element => {
    const cart = useSelector((state: RootState) => state.cart.cart)

    const itemInCart = cart.find(cartItem => cartItem.id === props.item.id)

    const dispatch = useDispatch()
    const handleAddClick = () => {
        dispatch(
            addToCart({
                item: props.item,
                count: 1,
            })
        )
    }

    return (
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <div className="flex flex-col border border-gray-300  rounded-3xl bg-white ">
                <div className="flex justify-center items-center">
                    <div className="card-image w-[180px] h-[180px] flex justify-center items-center">
                        <img
                            className="w-full h-full"
                            src={`/src/assets/${props.item.img}`}
                            alt="headphone"
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4 mx-6">
                    <p className="font-bold">{props.item.title}</p>

                    <p className="font-semibold text-yellow-600   ">
                        {props.item.price}
                        <CurrencyRubleIcon sx={{ fontSize: 16, mb: 0.2 }} />
                    </p>
                </div>
                {/* <span className="text-right">
                    <s className="font-normal text-yellow-600 text-sm mr-8 relative bottom-2">
                        {props.item.discountedPrice ? props.item.price : ''}
                    </s>
                </span> */}
                <div className="flex justify-between items-center my-5 mx-6 ">
                    <p className="font-bold text-gray-500">
                        <StarIcon
                            sx={{
                                fontSize: 18,
                                mb: 0.4,
                                color: '#ca8a04',
                                mr: 0.7,
                            }}
                        />
                        {props.item.rating.toFixed(1)}
                    </p>

                    <p
                        className="font-semibold  cursor-pointer "
                        onClick={handleAddClick}
                    >
                        {itemInCart ? (
                            <div className="flex gap-5 items-center">
                                <button>
                                    <img src="/src/assets/-.jpg" alt="-" />
                                </button>
                                <div className="font-bold">
                                    {itemInCart.count}
                                </div>
                                <button>
                                    <img src="/src/assets/+.jpg" alt="+" />
                                </button>
                            </div>
                        ) : (
                            t('buy')
                        )}
                    </p>
                </div>
            </div>
        </Grid>
    )
}

export default CardHeadPhone
