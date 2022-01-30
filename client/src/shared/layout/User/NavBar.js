import { useState } from "react";
import { Link } from "react-router-dom";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";

export default function Navbar({ action }) {
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (
        <ul className=" justify-between bg-gray-900 text-white text-base font-text font-medium flex ">
            <li className="hover:bg-red-500 px-2 py-2 block sm:hidden cursor-pointer" onClick={action}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </li>
            <li className="hover:bg-red-500 px-2 py-2 hidden sm:block">
                <Link to="/" >
                    <span className="hover:border-b-2 border-white ">Trang chủ</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-3 py-2 hidden sm:block">
                <Link to={FE_CATEGORY_CONSTANT_ROUTES.hot.path}>
                    <span className="hover:border-b-2 border-white x">Tin nóng</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-2 py-2 hidden sm:block">
                <Link to={FE_CATEGORY_CONSTANT_ROUTES.new.path}>
                    <span className="hover:border-b-2 border-white ">Tin mới</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-2 py-2 hidden md:block">
                <Link to={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path}>
                    <span className="hover:border-b-2 border-white ">Thế giới</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-2 py-2 hidden md:block">
                <Link to={FE_CATEGORY_CONSTANT_ROUTES.sport.path}>
                    <span className="hover:border-b-2 border-white ">Thể thao</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-2 py-2  hidden sm:block">
                <Link to={FE_CATEGORY_CONSTANT_ROUTES.technology.path}>
                    <span className="hover:border-b-2 border-white ">Công nghệ</span>
                </Link>
            </li>
            <li className="hover:bg-red-500 px-2 py-2 relative hidden sm:block" onMouseEnter={() => { setShowSubMenu(!showSubMenu) }} onMouseLeave={() => { setShowSubMenu(!showSubMenu) }}>
                <span className="hover:border-b-2 border-white cursor-pointer">Chủ đề khác</span>
                {showSubMenu ? (
                    <div className="w-full absolute top-10 left-0 bg-black border-t rounded-md border-gray-200 block p-2" onClick={() => { setShowSubMenu(!showSubMenu) }}>
                        <ul className="text-white text-sm font-text">
                            <li className="hover:bg-red-500 px-2 py-2 hidden sm:block">
                                <Link to={FE_CATEGORY_CONSTANT_ROUTES.health.path} >
                                    <span className="hover:border-b-2 border-white ">Sức khỏe</span>
                                </Link>
                            </li>
                            <li className="hover:bg-red-500 px-3 py-2 hidden sm:block">
                                <Link to={FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.path}>
                                    <span className="hover:border-b-2 border-white x">Khám phá Việt Nam</span>
                                </Link>
                            </li>
                        </ul>
                    </div>) : ""}
            </li>
            <li className="border-l-2 border-white hidden sm:block">
                <div className="flex items-center">
                    <input type="text" className="bg-inherit font-text pl-5 pr-3 py-2 hidden lg:block" placeholder="Tìm kiếm thông tin" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1 mt-3 block lg:mx-auto lg:my-auto" fill="none" viewBox="0 0 15 15" stroke="currentColor">
                        <path d="M9.0155 8.3085L11.157 10.4495L10.4495 11.157L8.3085 9.0155C7.51187 9.65411 6.521 10.0015 5.5 10C3.016 10 1 7.984 1 5.5C1 3.016 3.016 1 5.5 1C7.984 1 10 3.016 10 5.5C10.0015 6.521 9.65411 7.51187 9.0155 8.3085ZM8.0125 7.9375C8.64706 7.28494 9.00143 6.41021 9 5.5C9 3.566 7.4335 2 5.5 2C3.566 2 2 3.566 2 5.5C2 7.4335 3.566 9 5.5 9C6.41021 9.00143 7.28494 8.64706 7.9375 8.0125L8.0125 7.9375Z" fill="white" fillOpacity="0.3" />
                    </svg>

                </div>
            </li>
        </ul>
    )
}