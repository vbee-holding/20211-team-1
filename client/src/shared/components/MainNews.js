import { updateArticles } from "../../services/User/HomeServices";
import { convertTime } from "../utils/convertTime";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "./LoadingV1";
import LoadingV2 from "./LoadingV2";
export default function MainNews({ data, reload }) {
    const { thumbnail, link, title, source, releaseTime, _id, numOfViews } = data;
    return (
        <div>
            <div className='gap-5 overflow-hidden'>
                
                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={async() => {
                            await updateArticles(_id, { numOfViews: numOfViews + 1 })
                            reload();
                        }}
                    >
                        <LazyLoad placeholder={<LoadingV1 />}>
                        <img src={thumbnail} alt="" className='h-44 sm:h-56 max-h-mi-1 w-full md:h-i-1 lg:h-i-1 object-cover rounded' />
                        </LazyLoad>
                    </a>
                
                <div>
                    <div className='flex gap-1 mt-1 items-end overflow-hidden'>
                    <LazyLoad placeholder={<LoadingV2 />}>
                        <img src={source.logo} alt="" className='max-h-5' />
                        </LazyLoad>
                        <span className='text-xs block font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                    <span className='text-xl sm:text-2xl md:text-4xl font-semibold font-text hover:text-blue-400'>
                        <a href={link} target="_blank" rel="noreferrer" onClick={() => updateArticles(_id, { numOfViews: numOfViews + 1 })}>{title}</a>
                    </span>

                </div>
            </div>
        </div>
    )
}