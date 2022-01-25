import { convertTime } from "../utils/convertTime";

export default function MainNewsV2({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='gap-5 mt-5 md:mt-0 overflow-hidden'>
                <a href={link}>
                    <img src={thumbnail} alt="" className='h-44 sm:h-52 md:max-h-mi-2 w-full md:h-i-2 sm:object-cover rounded' />
                </a>

                <div>
                    <div className='flex gap-1 mt-1 items-end'>
                        <img src={source.logo} alt="" className='max-h-4 object-fill' />
                        <span className='text-xs font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                    <span className='text-lg font-semibold font-text hover:text-blue-400'>
                        <a href={link}>{title}</a>
                    </span>

                </div>
            </div>
        </div>
    )
}