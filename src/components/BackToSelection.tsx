import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useTranslation } from 'react-i18next'

const BackToSelection = () => {
    const { t } = useTranslation()
    return (
        <>
            <button className=" bg-white rounded-2xl p-4 shadow-lg font-semibold hover:bg-gr transition duration-300 ease-out hover:ease-in">
                <ArrowBackIcon sx={{ fontSize: 16, mb: 0.2 }} />
                {t('backToSelection')}
            </button>
        </>
    )
}

export default BackToSelection
