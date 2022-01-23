export default function MainNews({ data }){
    const { thumbnail, link, title, source, releaseTime } = data;
    console.log(data)
    return (
        <div className='relative'>
            <div className=' overflow-hidden'>
            <img src={thumbnail} alt="" className='w-mi-1 h-mi-1 object-cover  rounded' />
            </div>
            <div className='text-3xl mt-3'>
                <span>
                    <a href={link}>{title}</a>
                </span>
            </div>
            <div className=' bg-white flex gap-2 align-middle p-1 shadow-2xl rounded-lg absolute top-0 left-0 mt-2 ml-2'>
                <img src={source.logo} alt="" className='max-h-4' />
                <span className='text-xs text-gray-400'>{releaseTime} giờ</span>
            </div>
        </div>
    )
}