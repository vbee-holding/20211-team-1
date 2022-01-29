import { updateArticles } from "../../services/User/HomeServices";
import { convertTime } from "../utils/convertTime";
import LazyLoad from 'react-lazyload'
import LoadingV2 from "./LoadingV2";
export default function SubNewsV2({ data, reload }) {
    const { thumbnail, link, title, source, releaseTime, _id, numOfViews } = data;
    return (
        <div>
            <div className='grid grid-cols-6 mb-2 gap-5 overflow-hidden'>
                <a href={link} target="_blank" rel="noreferrer" className="block col-start-1 col-end-3" onClick={
                    async () => {
                        await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                        reload();
                    }
                }>
                    <LazyLoad placeholder={<LoadingV2 />}>
                        <img src={thumbnail} alt="" className=' h-i-3 w-full object-cover rounded' />
                    </LazyLoad>
                </a>
                <div className="col-start-3 col-end-7">
                    <span className='text-sm sm:text-lg font-medium hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer" onClick={
                            async () => {
                                await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                                reload();
                            }
                        }>{title}</a>
                    </span>
                    <div className='flex gap-1 items-end overflow-hidden'>
                        <LazyLoad placeholder={<LoadingV2 />}>
                            <img src={source.logo} alt="" className='max-h-4 object-cover' />
                        </LazyLoad>
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-2" />
        </div>
    )
}