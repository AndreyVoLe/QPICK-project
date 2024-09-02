import { useTranslation } from 'react-i18next'
import { RootState } from '../redux/store/store'
import { useSelector } from 'react-redux'
import CartCarditems from './CartCardItems'
import CartTotal from './CartTotal'
import BackToSelection from './BackToSelection'
import { Link } from 'react-router-dom'

const CartContent = () => {
    const { t } = useTranslation()
    const cart = useSelector((state: RootState) => state.cart.cart)
    console.log(cart)
    return (
        <>
            {cart.length > 0 ? (
                <main className="px-4 sm:px-6 lg:px-8">
                    <p className="font-semibold text-gray-600 mt-20 mb-4">
                        {t('cart')}
                    </p>
                    <div className="flex justify-between  ">
                        <div className="flex flex-col gap-5">
                            {cart.map(item => (
                                <CartCarditems item={item} />
                            ))}
                        </div>

                        <section>
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
