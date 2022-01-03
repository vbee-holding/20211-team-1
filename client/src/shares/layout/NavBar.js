export default function Navbar(){
    return(
            <ul className="flex justify-between bg-gray-900 text-white text-xl font-medium">
                <li className="hover:bg-red-500 px-5 py-8">
                    <a href="#" >
                        <span className="hover:border-b-2 border-white ">Trang chủ</span>
                    </a>
                </li>
                <li className="hover:bg-red-500 px-5 py-8">
                    <a href="#">
                        <span  className="hover:border-b-2 border-white ">Tin nóng</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Tin mới</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Video</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Thể thao</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Covid-19</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Khám phá Việt Nam</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Khám phá thế giới</span>
                    </a> 
                </li> 
                <li className ="hover:bg-red-500 px-5 py-8">
                    <a href=" #">
                        <span  className="hover:border-b-2 border-white ">Chủ đề khác</span>
                    </a>
                </li>
                <li className="border-l-2 border-white">
                    <div>
                    <input type="text" className="bg-inherit px-5 py-8 block" placeholder="Tìm kiếm thông tin"/> 
                    </div>  
                </li>
            </ul>
    )
}