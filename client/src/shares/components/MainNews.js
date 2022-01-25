import { convertTime } from "../utils/convertTime";

export default function MainNews({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='gap-5 overflow-hidden'>
                <a href={link}>
                    <img src={thumbnail} alt="" className='h-44 sm:h-56 max-h-mi-1 w-full md:h-i-1 lg:h-i-1 object-cover rounded'  />
                </a>

                <div>
                    <div className='flex gap-1 mt-1 items-end overflow-hidden'>
                        <img src={source.logo} alt="" className='max-h-5' />
                        <span className='text-xs block font-medium font-text text-gray-400'>{convertTime(Date.now() - releaseTime)}</span>
                    </div>
                    <span className='text-xl sm:text-2xl md:text-4xl font-semibold font-text hover:text-blue-400'>
                        <a href={link}>{title}</a>
                    </span>

                </div>
            </div>
        </div>
    )
}