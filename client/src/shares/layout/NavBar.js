export default function Navbar() {
    return (
        <ul className="flex justify-between bg-gray-900 text-white text-base font-medium">
            <li className="hover:bg-red-500 px-2 py-3">
                <a href="#" >
                    <span className="hover:border-b-2 border-white ">Trang chủ</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href="#">
                    <span className="hover:border-b-2 border-white ">Tin nóng</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href=" #">
                    <span className="hover:border-b-2 border-white ">Tin mới</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href=" #">
                    <span className="hover:border-b-2 border-white ">Video</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href=" #">
                    <span className="hover:border-b-2 border-white ">Thể thao</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href=" #">
                    <span className="hover:border-b-2 border-white ">Công nghệ</span>
                </a>
            </li>
            <li className="hover:bg-red-500 px-2 py-3">
                <a href=" #">
                    <span className="hover:border-b-2 border-white ">Chủ đề khác</span>
                </a>
            </li>
            <li className="border-l-2 border-white">
                <div className="flex align-middle">
                    <input type="text" className="bg-inherit pl-5 pr-3 py-3 block" placeholder="Tìm kiếm thông tin" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mt-3 mr-4 align-middle block" fill="none" viewBox="0 0 15 15" stroke="currentColor">
                        <path d="M9.0155 8.3085L11.157 10.4495L10.4495 11.157L8.3085 9.0155C7.51187 9.65411 6.521 10.0015 5.5 10C3.016 10 1 7.984 1 5.5C1 3.016 3.016 1 5.5 1C7.984 1 10 3.016 10 5.5C10.0015 6.521 9.65411 7.51187 9.0155 8.3085ZM8.0125 7.9375C8.64706 7.28494 9.00143 6.41021 9 5.5C9 3.566 7.4335 2 5.5 2C3.566 2 2 3.566 2 5.5C2 7.4335 3.566 9 5.5 9C6.41021 9.00143 7.28494 8.64706 7.9375 8.0125L8.0125 7.9375Z" fill="white" fillOpacity="0.3" />
                    </svg>

                </div>
            </li>
        </ul>
    )
}