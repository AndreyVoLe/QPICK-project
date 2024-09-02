import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble'
import { IHeadphones } from '../data.headphones'

interface ILikeItem {
    item: IHeadphones
}

const LikeItem = (props: ILikeItem) => {
    return (
        <div className=" ">
            <section className=" flex rounded-[30px] bg-white border border-gray-300 shadow-lg px-5 pb-4 h-[180px] md:w-[633px] min-w-[300px] ">
                <div className="flex justify-between items-center">
                    <div className="flex gap-6">
                        <img
                            className=""
                            loading="lazy"
                            src={`/src/assets/${props.item.img}`}
                            width={150}
                            height={150}
                            alt="headphone image"
                        />
                        <div className="flex flex-col justify-center gap-2 ">
                            <div className="text-lg font-medium text-gray-900">
                                {props.item.title}
                            </div>
                            <div className="font-semibold text-neutral-400">
                                {props.item.price}
                                <CurrencyRubleIcon
                                    sx={{ fontSize: 16, mb: 0.2 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LikeItem
