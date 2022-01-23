export default function SubNews({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='flex mb-3 gap-5 overflow-hidden'>
                <img src={thumbnail} alt="" className='max-w-mi-4 max-h-mi-4 rounded'/>
                <div>
                <span className='text-base hover:text-red-300'>
                    <a href={link}>{title}</a>
                </span>
                    <div className='flex gap-2'>
                        <img src={source.logo} alt="" className='max-h-4' />
                        <span className='text-xs text-gray-400'>{releaseTime} giờ</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-3"/>
        </div>
    )
}