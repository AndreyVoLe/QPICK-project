import { Toolbar } from '@mui/material'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
    const { i18n } = useTranslation()

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <footer className="footer">
            <Toolbar className="flex flex-wrap gap-5 justify-between items-start px-7 py-9 w-full bg-white rounded-[30px_30px_0px_0px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full mt-10 ">
                <Link to={'/'}>
                    <h2 className="font-semibold text-2xl ml-4">QPICK</h2>
                </Link>
                <ul>
                    <li className="hover:text-gray-400 rounded-lg transition duration-300 ease-out">
                        <a href="">{t('favorite')}</a>
                    </li>
                    <li className="hover:text-gray-400 rounded-lg transition duration-300 ease-out">
                        <Link to={'/cart'}>
                            <div>{t('cart')}</div>
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 rounded-lg transition duration-300 ease-out">
                        <a href="">{t('contacts')}</a>
                    </li>
                </ul>
                <div>
                    <p>{t('terms')}</p>
                    <ul className="flex justify-center items-center gap-3">
                        <li>
                            <img src="/src/assets/RU.png" alt="global" />
                        </li>
                        <li>
                            <button
                                className="hover:text-gray-400 rounded-lg transition duration-300 ease-out"
                                onClick={() => handleLanguageChange('ru')}
                            >
                                Rus
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:text-gray-400 rounded-lg transition duration-300 ease-out"
                                onClick={() => handleLanguageChange('en')}
                            >
                                Eng
                            </button>
                        </li>
                        <li>
                            <button
                                className="hover:text-gray-400 rounded-lg transition duration-300 ease-out"
                                onClick={() => handleLanguageChange('kz')}
                            >
                                Kz
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-3 mr-4 ">
                    <a href="https://vk.com/neoflex_ru">
                        <img src="/src/assets/VK.svg" alt="vk" />
                    </a>
                    <a href="https://wa.me/74959842513">
                        <img src="/src/assets/Whatsapp.svg" alt="whatsapp" />
                    </a>
                    <a href="https://t.me/neoflexcareers">
                        <img src="/src/assets/Telegram.svg" alt="telegram" />
                    </a>
                </div>
            </Toolbar>
        </footer>
    )
}

export default Footer
