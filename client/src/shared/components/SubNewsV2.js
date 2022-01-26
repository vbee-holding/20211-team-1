import { updateArticles } from "../../services/User/HomeServices";
import { convertTime } from "../utils/convertTime";

export default function SubNewsV2({ data, reload }) {
    const { thumbnail, link, title, source, releaseTime, _id, numOfViews } = data;
    return (
        <div>
            <div className='grid grid-cols-6 mb-2 gap-5 overflow-hidden'>
                <a href={link} target="_blank" className="block col-start-1 col-end-3" onClick={
                    async () => {
                        await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                        reload();
                    }
                }>
                    <img src={thumbnail} alt="" className=' h-i-3 w-full object-cover rounded' />
                </a>
                <div className="col-start-3 col-end-7">
                    <span className='text-sm sm:text-lg font-medium hover:text-blue-400'>
                        <a href={link} target="_blank" onClick={
                            async () => {
                                await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                                reload();
                            }
                        }>{title}</a>
                    </span>
                    <div className='flex gap-1 items-end overflow-hidden'>
                        <img src={source.logo} alt="" className='max-h-4 object-cover' />
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-2" />
        </div>
    )
}