import Thumbnail from '../../assets/images/thumbnail.png'
import Source from '../../assets/images/source.png'
import Category from '../../assets/images/Category.png'
export default function SubNewsV2({ data }) {
    return (
        <div>
            <div className='flex mb-3 gap-5 overflow-hidden'>
                <img src={Category} alt="" className='max-w-mi-3 max-h-mi-3 rounded'/>
                <div>
                    <span className='text-xl'>Giao thông thông thoáng ngày cuối nghỉ lễ</span>
                    <div className='flex gap-2'>
                        <img src={Source} alt="" className='max-h-4'/>
                        <span className='text-xs text-gray-400'>{data} giờ</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-3"/>
        </div>
    )
}