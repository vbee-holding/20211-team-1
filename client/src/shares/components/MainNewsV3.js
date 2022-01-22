import MainNew from '../../assets/images/main-news.png'
import Source from '../../assets/images/source.png'
import Category from '../../assets/images/main-news-v3.png'
export default function MainNewsV3(){
    return (
        <div className='relative'>
            <div className='overflow-hidden'>
            <img src={Category} alt="" className='max-w-mi-5 max-h-mi-5  rounded' />
            </div>
            <div className='text-xl  mt-3'>
                <span>Sáng 4/1, khai mạc Kỳ họp bất thường lần thứ Nhất, Quốc hội khóa XV </span>
            </div>
            <div className=' bg-white flex gap-2 align-middle p-1 rounded-lg absolute top-0 left-0 mt-2 ml-2'>
                <img src={Source} alt="" className='max-h-4' />
                <span className='inline-block text-xs text-gray-400'>1 giờ</span>
            </div>
        </div>
    )
}