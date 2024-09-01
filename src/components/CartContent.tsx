import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'

import { useTranslation } from 'react-i18next'

const CartContent = () => {
    const { t } = useTranslation()
    return (
        <main className="px-4 sm:px-6 lg:px-8">
            <p className="font-semibold text-gray-600 mt-20 mb-4">
                {t('cart')}
            </p>
            <div className="flex justify-between ">
                <div className="flex flex-col gap-5">
                    <section className="rounded-[30px] border border-gray-300 shadow-lg px-5 pb-4  ">
                        <div className="flex justify-between">
                            <div className="flex gap-6">
                                <img
                                    className=""
                                    loading="lazy"
                                    src="/src/assets/1.png"
                                    width={150}
                                    alt="headphone image"
                                />
                                <div className="flex flex-col justify-center gap-2 ">
                                    <div className="text-lg font-medium text-gray-900">
                                        Apple BYZ S852i
                                    </div>
                                    <div className="font-semibold text-neutral-400">
                                        2957
                                        <CurrencyRubleIcon
                                            sx={{ fontSize: 16, mb: 0.2 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <img
                                    src="/src/assets/Vector.jpg"
                                    alt="backet"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6 ml-6">
                            <div className="flex gap-5 items-center">
                                <button>
                                    <img src="/src/assets/-.jpg" alt="-" />
                                </button>
                                <div className="font-bold">1</div>
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
                    <section className="rounded-[30px] border border-gray-300 shadow-lg px-5 pb-4 w-[633px]">
                        <div className="flex justify-between">
                            <div className="flex gap-6">
                                <img
                                    className=""
                                    loading="lazy"
                                    src="/src/assets/1.png"
                                    width={150}
                                    alt="headphone image"
                                />
                                <div className="flex flex-col justify-center gap-2 ">
                                    <div className="text-lg font-medium text-gray-900">
                                        Apple BYZ S852i
                                    </div>
                                    <div className="font-semibold text-neutral-400">
                                        2957
                                        <CurrencyRubleIcon
                                            sx={{ fontSize: 16, mb: 0.2 }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <img
                                    src="/src/assets/Vector.jpg"
                                    alt="backet"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6 ml-6">
                            <div className="flex gap-5 items-center">
                                <button>
                                    <img src="/src/assets/-.jpg" alt="-" />
                                </button>
                                <div className="font-bold">1</div>
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
                </div>

                <section></section>
            </div>
        </main>
    )
}

export default CartContent
