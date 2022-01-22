import Thumbnail from '../../assets/images/thumbnail.png'
import Source from '../../assets/images/source.png'
export default function SubNews({ data }) {
    return (
        <div>
            <div className='flex mb-3 gap-5 overflow-hidden'>
                <img src={Thumbnail} alt="" className='max-w-mi-4 max-h-mi-4 rounded'/>
                <div>
                    <span className='text-base'>Báo Thái Lan tin đội nhà sẽ làm điều chưa ai làm được trước tuyển Việt Nam</span>
                    <div className='flex gap-2'>
                        <img src={Source} alt="" className='max-h-4' />
                        <span className='text-xs text-gray-400'>{data} giờ</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 mb-3"/>
        </div>
    )
}