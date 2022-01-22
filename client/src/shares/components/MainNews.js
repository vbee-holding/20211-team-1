import MainNew from '../../assets/images/main-news.png'
import Source from '../../assets/images/source.png'
export default function MainNews(){
    return (
        <div className='relative'>
            <div className=' overflow-hidden'>
            <img src={MainNew} alt="" className='w-mi-1 h-mi-1 object-cover  rounded' />
            </div>
            <div className='text-3xl mt-3'>
                <span>Covid 19 tới 6 giờ ngày 21/12: Nhiều nước siết chặt phòng dịch trước  giáng sinh; WHO đưa ra cảnh báo về virus omicron </span>
            </div>
            <div className=' bg-white flex gap-2 align-middle p-1 shadow-2xl rounded-lg absolute top-0 left-0 mt-2 ml-2'>
                <img src={Source} alt="" className='max-h-4' />
                <span className='text-xs text-gray-400'>1 giờ</span>
            </div>
        </div>
    )
}