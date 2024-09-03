import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { useTranslation } from 'react-i18next'
import BackToSelection from './BackToSelection'
import { Link } from 'react-router-dom'
import PaymentModal from './PaymentModal'
import { useState } from 'react'

const CartTotal = () => {
    const cart = useSelector((state: RootState) => state.cart.cart)

    const totalQuantity = cart.reduce(
        (total, item) => total + item.price * item.count,
        0
    )
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(prev => !prev)
    const { t } = useTranslation()

    return (
        <section className="flex flex-col items-center mr-0 xs:mr-5">
            <div className="flex flex-col items-center h-[120px] w-[350px]  rounded-2xl shadow-2xl bg-white mb-12">
                <div className="flex justify-between items-center rounded-2xl  w-full h-1/2 bg-white p-5">
                    <span className="font-semibold">{t('total')}</span>
                    <span className="font-semibold">
                        <CurrencyRubleIcon sx={{ fontSize: 16, mb: 0.2 }} />
                        {totalQuantity}
                    </span>
                </div>
                <button
                    className="bg-midnight text-white font-medium w-full h-1/2 rounded-2xl"
                    onClick={handleOpenModal}
                >
                    {t('goToBuy')}
                </button>
            </div>
            <Link to={'/'}>
                <BackToSelection />
            </Link>
            <PaymentModal onOpen={openModal} />
        </section>
    )
}

export default CartTotal
