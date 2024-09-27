import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { useTranslation } from 'react-i18next'
import BackToSelection from '../components/ui/BackToSelection'
import { Link } from 'react-router-dom'
import LikeItem from '../components/LikeComponents/LikeItem'

const LikeContent = () => {
    const like = useSelector((state: RootState) => state.like.like)
    const { t } = useTranslation()

    return (
        <>
            {like.length > 0 ? (
                <main className="px-4 sm:px-6 lg:px-8 bg-gr">
                    <p className="font-semibold text-gray-600 mt-[150px] mb-4 text-center sm">
                        {t('favorite')}
                    </p>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-5 items-center">
                            {like.map(i => (
                                <LikeItem item={i} key={i.id} />
                            ))}
                        </div>
                    </div>
                </main>
            ) : (
                <div className="h-[80vh] flex justify-center items-center">
                    <div className="flex flex-col items-center">
                        <div className="font-semibold text-2xl mb-6 text-center">
                            {t('emptyLike')}
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

export default LikeContent
