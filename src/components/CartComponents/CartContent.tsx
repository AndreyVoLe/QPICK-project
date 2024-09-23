import { useTranslation } from 'react-i18next'
import { RootState } from '../../redux/store/store'
import { useSelector } from 'react-redux'
import CartCarditems from './CartCardItems'
import CartTotal from './CartTotal'
import BackToSelection from '../helpers/BackToSelection'
import { Link } from 'react-router-dom'

const CartContent = () => {
    const { t } = useTranslation()

    const cart = useSelector((state: RootState) => state.cart.cart)

    return (
        <>
            {cart.length > 0 ? (
                <main className="sm:px-6 lg:px-0 bg-gr">
                    <p className="font-semibold text-gray-600 mt-20 mb-4">
                        {t('cart')}
                    </p>
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-stretch ">
                        <section className="flex flex-col gap-5">
                            {cart.map(item => (
                                <CartCarditems key={item.id} item={item} />
                            ))}
                        </section>

                        <section className="mt-10 lg:mt-0">
                            <CartTotal />
                        </section>
                    </div>
                </main>
            ) : (
                <div className="h-[80vh] flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="font-semibold text-2xl mb-6">
                            {t('emptyCart')}
                        </div>
                        <div className="">
                            <Link to={'/'}>
                                <BackToSelection />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CartContent
