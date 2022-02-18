import { updateArticles } from "../../services/User/HomeServices";
import { convertTime } from "../utils/convertTime";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "./LoadingV1";
import LoadingV2 from "./LoadingV2";
export default function MainNewsV3({ data, reload }) {
    const { thumbnail, link, title, source, releaseTime, _id, numOfViews } = data;
    return (
        <div>
            <div className='overflow-hidden'>

                <a href={link} target="_blank" rel="noreferrer" onClick={
                    async () => {
                        await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                        reload();
                    }
                }>
                    <LazyLoad placeholder={<LoadingV1 />}>
                        <img src={thumbnail} alt="" className='h-40 mb:h-48 md:max-h-mi-5 w-full md:h-i-5 lg:object-cover rounded' />
                    </LazyLoad>
                </a>

                <div>
                    <div className='flex gap-1 mt-1 items-end'>
                        <LazyLoad placeholder={<LoadingV2 />}>
                            <img src={source.logo} alt="" className='max-h-4 object-fill' />
                        </LazyLoad>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='text-xs font-semibold font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className='text-xs block font-semibold font-text text-gray-400 -ml-1'>{numOfViews}</span>
                    </div>
                    <span className='text-xl sm:text-lg font-semibold font-text hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer" onClick={
                            async () => {
                                await updateArticles(_id, { numOfViews: (numOfViews + 1) })
                                reload();
                            }
                        }>{title}</a>
                    </span>

                </div>
            </div>
        </div>
    )
}