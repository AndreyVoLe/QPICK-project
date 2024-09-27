import Grid from '@mui/material/Grid2'
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import StarIcon from '@mui/icons-material/Star'
import { IHeadphones } from '../../data.headphones'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store/store'
import { t } from 'i18next'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button } from '@mui/material'
import { useState } from 'react'
import HeadphoneModal from '../ui/HeadphoneModal'
import useHookDispatch from '../../hooks/useHookDispatch'

interface ICard {
    item: IHeadphones
}

const CardHeadPhone = (props: ICard): JSX.Element => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const cart = useSelector((state: RootState) => state.cart.cart)
    const itemInCart = cart.find(cartItem => cartItem.id === props.item.id)

    const like = useSelector((state: RootState) => state.like.like)
    const isFilled = like.some(i => i.id === props.item.id)

    const { handleChangeLike, handleAddClick, handleDecrease } =
        useHookDispatch(props.item)

    return (
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <div className="flex flex-col border border-gray-300  rounded-3xl bg-white relative ">
                <button
                    title={
                        isFilled
                            ? 'Удалить из избранного'
                            : 'Добавить в избранное'
                    }
                    className="absolute right-5 top-2 cursor-pointer"
                    onClick={handleChangeLike}
                >
                    {isFilled ? (
                        <FavoriteIcon sx={{ color: 'orange' }} />
                    ) : (
                        <FavoriteBorderOutlinedIcon sx={{ color: '#838383' }} />
                    )}
                </button>
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

                    <p className="font-semibold text-yellow-600">
                        {props.item.price}
                        <CurrencyRubleIcon sx={{ fontSize: 16, mb: 0.2 }} />
                    </p>
                </div>

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
                    <Button variant="outlined" onClick={handleOpen}>
                        {t('more')}
                    </Button>
                    <HeadphoneModal
                        open={open}
                        onClose={handleClose}
                        item={props.item}
                        itemInCart={itemInCart}
                        isFilled={isFilled}
                        handleChangeLike={handleChangeLike}
                        handleAddClick={handleAddClick}
                        handleDecrease={handleDecrease}
                    />

                    {itemInCart ? (
                        <div className="flex gap-5 max-sm:gap-3 items-center">
                            <button onClick={handleDecrease}>
                                <img src="/src/assets/-.jpg" alt="-" />
                            </button>
                            <div className="font-bold">{itemInCart.count}</div>
                            <button onClick={handleAddClick}>
                                <img src="/src/assets/+.jpg" alt="+" />
                            </button>
                        </div>
                    ) : (
                        <div
                            className="font-semibold  cursor-pointer "
                            onClick={handleAddClick}
                        >
                            {t('buy')}
                        </div>
                    )}
                </div>
            </div>
        </Grid>
    )
}

export default CardHeadPhone
