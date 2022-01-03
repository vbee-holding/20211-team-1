import FooterLogo from '../../assets/images/LogoFooter.png'
import Image from '../../assets/images/image-gallery.png'

export default function Footer(){
    return(
        <div className="text-white text-xl bg-black pt-12 pb-12">
            <div className="grid grid-cols-10 gap-10">
            {/* Thông tin liên hệ */}
            <div className="col-start-2 col-end-4">
                    <img src={FooterLogo} alt="Logo" />
                <div className='mt-6'>
                    <span className='block'>Liên hệ: Báo newcast</span>
                    <span className='block'>Địa chỉ: Số 3 đường Lê Thanh Nghị Phường 
                        Bách Khoa quận Hai Bà Trưng Hà Nội
                    </span>
                </div>
                <div className='mt-6'>
                    <i>Hell</i>
                    <i>Hell</i>
                    <i>Hell</i>
                    <i>Hell</i>
                </div>
            </div>

            {/* Bộ sưu tập hình ảnh */}

            <div className='col-start-4 col-end-6'>
                <h3 className='mb-2'>Hình ảnh</h3>
                <hr className='border-b-2 mb-4'/>
                <div className='grid grid-cols-3 gap-2'>
                    <img src={Image} alt="" />
                    <img src={Image} alt="" />
                    <img src={Image} alt="" />
                    <img src={Image} alt="" />
                    <img src={Image} alt="" />
                    <img src={Image} alt="" />
                </div>
            </div>

            {/* Các chủ đề */}

            <div className='col-start-6 col-end-8'>
                <h3 className='mb-2'>Chủ đề</h3>
                <hr className='border-b-2 mb-4'/>
                <div>
                    <button className='p-2 inline-block text-lg bg-blue-500 mb-2'>Thể thao</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 ml-4'>Giải trí</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 ml-4'>Covid-19</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 mb-2'>Công nghệ</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 ml-1'>Khám phá Việt Nam</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 '>Khám phá thế giới</button>
                    <button className='p-2 inline-block text-lg bg-blue-500 ml-2'>Năng lượng</button>
                </div>
            </div>

            {/* Theo dõi chúng tôi */}

            <div className='col-start-8 col-end-10'>
                <h3 className='mb-2'>Theo dõi chúng tôi</h3>
                <hr className='border-b-2 mb-4'/>
                <div>
                    <span>Để không bỏ lỡ bất kì thông tin nóng hổi nào hãy đăng kí với chúng tôi</span>
                    <input type="text" placeholder="Địa chỉ email của bạn" className='w-full mt-5 h-12 p-2'/>
                    <button className='w-full bg-red-500 text-white mt-5 h-12'>Đăng kí</button>
                </div>
            </div>
            </div>
        </div>
    )
}