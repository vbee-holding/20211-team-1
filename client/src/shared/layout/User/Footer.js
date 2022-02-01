import FooterLogo from "../../../assets/images/LogoFooter.png";
import Image from "../../../assets/images/image-gallery.png";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";

export default function Footer() {
    return (
        <div className="text-white font-text text-base bg-black pt-8 pb-8 md:pl-5 pl-1 pr-1">
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-3">
                {/* Thông tin liên hệ */}
                <div className="grid justify-center col-start-1 col-end-3 md:col-span-1">
                    <img src={FooterLogo} alt="Logo" className="w-5/6" />
                    <div className="mt-6">
                        <span className="block">Liên hệ: Báo newcast</span>
                        <span className="block">
                            Địa chỉ: Số 3 đường Lê Thanh Nghị Phường Bách Khoa quận Hai Bà
                            Trưng Hà Nội
                        </span>
                    </div>
                    <div className="mt-6 flex gap-3 justify-center">
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_233_219)">
                                <circle cx="21" cy="20" r="20" fill="#1B7BFD" />
                            </g>
                            <path
                                d="M23 21.5H25.5L26.5 17.5H23V15.5C23 14.47 23 13.5 25 13.5H26.5V10.14C26.174 10.097 24.943 10 23.643 10C20.928 10 19 11.657 19 14.7V17.5H16V21.5H19V30H23V21.5Z"
                                fill="white"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_233_219"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="42"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_233_219"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_233_219"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>

                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_233_224)">
                                <circle cx="21" cy="20" r="20" fill="#42C0F5" />
                            </g>
                            <path
                                d="M31.162 13.6559C30.3986 13.9936 29.589 14.2154 28.76 14.3139C29.6337 13.7914 30.2877 12.9689 30.6 11.9999C29.78 12.4879 28.881 12.8299 27.944 13.0149C27.3146 12.3415 26.4804 11.8949 25.5709 11.7445C24.6615 11.5941 23.7279 11.7484 22.9153 12.1834C22.1026 12.6183 21.4564 13.3096 21.0771 14.1497C20.6978 14.9898 20.6067 15.9317 20.818 16.8289C19.1551 16.7456 17.5283 16.3134 16.0433 15.5606C14.5582 14.8077 13.2481 13.751 12.198 12.4589C11.8263 13.0974 11.6309 13.8232 11.632 14.5619C11.632 16.0119 12.37 17.2929 13.492 18.0429C12.828 18.022 12.1786 17.8427 11.598 17.5199V17.5719C11.5982 18.5376 11.9324 19.4735 12.5438 20.221C13.1553 20.9684 14.0065 21.4814 14.953 21.6729C14.3366 21.84 13.6903 21.8646 13.063 21.7449C13.3299 22.5762 13.85 23.3031 14.5506 23.824C15.2512 24.3449 16.0971 24.6337 16.97 24.6499C16.1025 25.3313 15.1092 25.8349 14.0469 26.1321C12.9846 26.4293 11.8741 26.5142 10.779 26.3819C12.6907 27.6114 14.9161 28.264 17.189 28.2619C24.882 28.2619 29.089 21.8889 29.089 16.3619C29.089 16.1819 29.084 15.9999 29.076 15.8219C29.8949 15.2301 30.6016 14.4969 31.163 13.6569L31.162 13.6559Z"
                                fill="white"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_233_224"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="42"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_233_224"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_233_224"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>

                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_233_229)">
                                <circle cx="21" cy="20" r="20" fill="#C23785" />
                            </g>
                            <path
                                d="M21 10C23.717 10 24.056 10.01 25.122 10.06C26.187 10.11 26.912 10.277 27.55 10.525C28.21 10.779 28.766 11.123 29.322 11.678C29.8305 12.1779 30.224 12.7826 30.475 13.45C30.722 14.087 30.89 14.813 30.94 15.878C30.987 16.944 31 17.283 31 20C31 22.717 30.99 23.056 30.94 24.122C30.89 25.187 30.722 25.912 30.475 26.55C30.2247 27.2178 29.8311 27.8226 29.322 28.322C28.822 28.8303 28.2173 29.2238 27.55 29.475C26.913 29.722 26.187 29.89 25.122 29.94C24.056 29.987 23.717 30 21 30C18.283 30 17.944 29.99 16.878 29.94C15.813 29.89 15.088 29.722 14.45 29.475C13.7823 29.2245 13.1775 28.8309 12.678 28.322C12.1694 27.8222 11.7759 27.2175 11.525 26.55C11.277 25.913 11.11 25.187 11.06 24.122C11.013 23.056 11 22.717 11 20C11 17.283 11.01 16.944 11.06 15.878C11.11 14.812 11.277 14.088 11.525 13.45C11.7752 12.7822 12.1688 12.1773 12.678 11.678C13.1777 11.1692 13.7824 10.7757 14.45 10.525C15.088 10.277 15.812 10.11 16.878 10.06C17.944 10.013 18.283 10 21 10ZM21 15C19.6739 15 18.4021 15.5268 17.4645 16.4645C16.5268 17.4021 16 18.6739 16 20C16 21.3261 16.5268 22.5979 17.4645 23.5355C18.4021 24.4732 19.6739 25 21 25C22.3261 25 23.5979 24.4732 24.5355 23.5355C25.4732 22.5979 26 21.3261 26 20C26 18.6739 25.4732 17.4021 24.5355 16.4645C23.5979 15.5268 22.3261 15 21 15ZM27.5 14.75C27.5 14.4185 27.3683 14.1005 27.1339 13.8661C26.8995 13.6317 26.5815 13.5 26.25 13.5C25.9185 13.5 25.6005 13.6317 25.3661 13.8661C25.1317 14.1005 25 14.4185 25 14.75C25 15.0815 25.1317 15.3995 25.3661 15.6339C25.6005 15.8683 25.9185 16 26.25 16C26.5815 16 26.8995 15.8683 27.1339 15.6339C27.3683 15.3995 27.5 15.0815 27.5 14.75ZM21 17C21.7956 17 22.5587 17.3161 23.1213 17.8787C23.6839 18.4413 24 19.2044 24 20C24 20.7956 23.6839 21.5587 23.1213 22.1213C22.5587 22.6839 21.7956 23 21 23C20.2044 23 19.4413 22.6839 18.8787 22.1213C18.3161 21.5587 18 20.7956 18 20C18 19.2044 18.3161 18.4413 18.8787 17.8787C19.4413 17.3161 20.2044 17 21 17Z"
                                fill="white"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_233_229"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="42"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_233_229"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_233_229"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>

                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_d_233_234)">
                                <circle cx="21" cy="20" r="20" fill="#EF5043" />
                            </g>
                            <path
                                d="M30.543 14.498C31 16.28 31 20 31 20C31 20 31 23.72 30.543 25.502C30.289 26.487 29.546 27.262 28.605 27.524C26.896 28 21 28 21 28C21 28 15.107 28 13.395 27.524C12.45 27.258 11.708 26.484 11.457 25.502C11 23.72 11 20 11 20C11 20 11 16.28 11.457 14.498C11.711 13.513 12.454 12.738 13.395 12.476C15.107 12 21 12 21 12C21 12 26.896 12 28.605 12.476C29.55 12.742 30.292 13.516 30.543 14.498ZM19 23.5L25 20L19 16.5V23.5Z"
                                fill="white"
                            />
                            <defs>
                                <filter
                                    id="filter0_d_233_234"
                                    x="0"
                                    y="0"
                                    width="42"
                                    height="42"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="1" />
                                    <feGaussianBlur stdDeviation="0.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_233_234"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_233_234"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Bộ sưu tập hình ảnh */}

                <div className=" col-start-1 col-end-3 md:col-span-1">
                    <h3 className="mb-2">Hình ảnh</h3>
                    <hr className="mb-4" />
                    <div className="grid justify-items-center grid-cols-6 gap-2 p-1 md:grid-cols-3">
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                    </div>
                </div>

                {/* Các chủ đề */}

                <div className="">
                    <h3 className="mb-2">Chủ đề</h3>
                    <hr className=" mb-4" />
                    <div className=" grid justify-center">
                        <div className="flex w-64 md:w-full justify-between">
                            <button className="p-1 w-1/3 inline-block text-xs bg-pink-500">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.sport.path}>Thể thao</a>
                            </button>
                            <button className="p-1 w-1/3 inline-block text-xs bg-purple-600 ml-1">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.entertainment.path}>
                                    Giải trí
                                </a>
                            </button>
                            <button className="p-1 w-1/3 ml-1 inline-block text-xs bg-blue-600">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.technology.path}>
                                    Công nghệ
                                </a>
                            </button>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="p-1 w-full inline-block text-xs bg-pink-500">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.path}>
                                    Khám phá Việt Nam
                                </a>
                            </button>
                        </div>
                        <div className="flex justify-between mt-2">
                            <button className="p-1 w-2/3 inline-block text-xs bg-blue-400 ">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path}>
                                    Khám phá thế giới
                                </a>
                            </button>
                            <button className="w-1/3 inline-block text-xs bg-red-500 ml-1">
                                <a href={FE_CATEGORY_CONSTANT_ROUTES.health.path}>Sức khỏe</a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Theo dõi chúng tôi */}

                <div className="">
                    <h3 className="mb-2">Theo dõi chúng tôi</h3>
                    <hr className="mb-4" />
                    <div>
                        <span className="text-sm">
                            Để không bỏ lỡ bất kì thông tin nóng hổi nào hãy đăng kí với chúng
                            tôi
                        </span>
                        <div className="grid justify-center">
                            <div className="w-64 md:w-full">
                                <input
                                    type="text"
                                    placeholder="Địa chỉ email của bạn"
                                    className="w-full mt-5 h-10 p-2"
                                />
                                <button className="w-full bg-red-500 text-white mt-5 h-10">
                                    Đăng kí
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
