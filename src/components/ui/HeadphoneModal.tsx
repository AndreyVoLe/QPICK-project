import React from 'react'
import { Box, Button, Modal } from '@mui/material'
import { t } from 'i18next'
import { IHeadphones } from '../../data.headphones'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'

import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import { ICart } from '../../redux/slices/cartSlice'

interface IModalProps {
    open: boolean
    onClose: () => void
    item: IHeadphones
    itemInCart: ICart | undefined
    isFilled: boolean
    handleChangeLike: () => void
    handleAddClick: () => void
    handleDecrease: () => void
}

const HeadphoneModal: React.FC<IModalProps> = ({
    open,
    onClose,
    item,
    itemInCart,
    isFilled,
    handleChangeLike,
    handleAddClick,
    handleDecrease,
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '1px solid transparent',
                    boxShadow: 24,
                    pt: 4,
                    px: 4,
                    pb: 4,
                    borderRadius: 5,
                }}
            >
                <div className="flex flex-col items-center">
                    <div>
                        <img src={`/src/assets/${item.img}`} alt="" />
                    </div>
                    <h2 className="text-center mb-2 font-bold">{item.title}</h2>
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
                            <FavoriteBorderOutlinedIcon
                                sx={{ color: '#838383' }}
                            />
                        )}
                    </button>

                    <p className="font-semibold text-yellow-600   ">
                        {item.price}
                        <CurrencyRubleIcon sx={{ fontSize: 16, mb: 0.2 }} />
                    </p>
                    <p className="my-2 ">{item.description}</p>

                    {itemInCart ? (
                        <div className="flex gap-5 items-center">
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
                            className="font-semibold hover:text-black  cursor-pointer "
                            onClick={handleAddClick}
                        >
                            {t('buy')}
                        </div>
                    )}
                    <Button variant="outlined" onClick={onClose} sx={{ mt: 2 }}>
                        {t('close')}
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default HeadphoneModal
