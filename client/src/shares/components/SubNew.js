import Thumbnail from '../../assets/images/thumbnail.png'
import Source from '../../assets/images/source.png'
export default function SubNew({ data }) {
    return (
        <div className='flex mb-3 gap-5'>
            <img src={Thumbnail} alt="" />
            <div>
                <span className='font-bold text-lg'>Báo Thái Lan tin đội nhà sẽ làm điều chưa ai làm được trước tuyển Việt Nam</span>
                <div className='flex gap-2'>
                    <img src={Source} alt="" />
                    <span>{data} giờ</span>
                </div>
            </div>
        </div>
    )
}