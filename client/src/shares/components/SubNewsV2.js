import { convertTime } from "../utils/convertTime";

export default function SubNewsV2({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='grid grid-cols-6 mb-2 gap-5 overflow-hidden'>
                <a href={link} className="block col-start-1 col-end-3">
                    <img src={thumbnail} alt="" className=' h-i-3 w-full object-cover rounded'  />
                </a>
                <div className="col-start-3 col-end-7">
                    <span className='text-sm sm:text-lg font-medium hover:text-blue-400'>
                        <a href={link}>{title}</a>
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