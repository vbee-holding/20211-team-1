import { convertTime } from "../utils/convertTime";

export default function SubNews({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='flex mb-2 gap-3 overflow-hidden'>
                <a href={link}>
                    <img src={thumbnail} alt="" className='max-w-fit max-h-fit w-16 h-16 object-cover rounded'/>
                </a>
                <div>
                    <span className='text-sm font-semibold font-text hover:text-blue-400'>
                        <a href={link}>{title}</a>
                    </span>
                    <div className='flex gap-1 items-end'>
                        <img src={source.logo} alt="" className='max-h-4 object-cover' />
                        <span className='text-xs font-text font-medium text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-1" />
        </div>
    )
}