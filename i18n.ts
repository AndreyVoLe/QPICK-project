import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './public/locales/en/translation.json'
import ruTranslations from './public/locales/ru/translation.json'
import kzTranslations from './public/locales/kz/translation.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        ru: {
            translation: ruTranslations,
        },
        kz: {
            translation: kzTranslations,
        },
    },
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n
