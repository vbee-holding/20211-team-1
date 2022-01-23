
export default function MainNewsV3({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div className='relative'>
            <div className='overflow-hidden'>
                <img src={thumbnail} alt="" className='max-w-mi-5 max-h-mi-5 w-i-5 h-i-5 rounded' />
            </div>
            <div className='text-xl  mt-3'>
                <span>
                    <a href={link}>{title}</a>
                </span>
            </div>
            <div className=' bg-white flex gap-2 align-middle p-1 rounded-lg absolute top-0 left-0 mt-2 ml-2'>
                <img src={source.logo} alt="" className='max-h-4' />
                <span className='inline-block text-xs text-gray-400 truncate'>{releaseTime} giờ</span>
            </div>
        </div>
    )
}