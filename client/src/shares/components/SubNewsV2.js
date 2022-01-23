export default function SubNewsV2({ data }) {
    const { thumbnail, link, title, source, releaseTime } = data;
    return (
        <div>
            <div className='flex mb-3 gap-5 overflow-hidden'>
                <img src={thumbnail} alt="" className='max-w-mi-3 max-h-mi-3 rounded'/>
                <div>
                    <span className='text-xl'>
                    <a href={link}>{title}</a>
                    </span>
                    <div className='flex gap-2'>
                        <img src={source.logo} alt="" className='max-h-4'/>
                        <span className='text-xs text-gray-400'>{releaseTime} giờ</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-3"/>
        </div>
    )
}