import Grid from '@mui/material/Grid2'
import { headphones, wirelessHead } from '../../data.headphones'
import CardHeadPhone from './CardHeadPhone'
import { useTranslation } from 'react-i18next'

const MainContent = () => {
    const { t } = useTranslation()

    return (
        <main>
            <p className="font-semibold text-gray-600 mt-[80px] mb-4">
                {t('headphone')}
            </p>
            <Grid container spacing={5}>
                {headphones.map(item => (
                    <CardHeadPhone key={item.id} item={item} />
                ))}
            </Grid>
            <p className="font-semibold text-gray-600 my-6 ">{t('wireless')}</p>
            <Grid container spacing={5}>
                {wirelessHead.map((item, index) => (
                    <CardHeadPhone key={index} item={item} />
                ))}
            </Grid>
        </main>
    )
}

export default MainContent
