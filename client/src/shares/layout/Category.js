import TopTitle from "../components/TopTitle";

export default function Category() {
    return (
        <div className="mt-10">
            <TopTitle title={"Category"} />
            <div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Covid-19</a>
                    </div>
                    <div className="inline-block bg-red-500 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Giải trí</a>
                    </div>
                    <div className="inline-block bg-purple-600 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Thể thao</a>
                    </div>
                    <div className="inline-block bg-pink-500 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Công nghệ</a>
                    </div>
                    <div className="inline-block bg-blue-600 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Video</a>
                    </div>
                    <div className="inline-block bg-blue-400 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Khám phá Việt Nam</a>
                    </div>
                    <div className="inline-block bg-pink-500 p-1 text-white">50</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href="#" className="block ml-4">Khám phá thế giới</a>
                    </div>
                    <div className="inline-block bg-blue-400 p-1 text-white">50</div>
                </div>
            </div>
            <hr className="border-black mb-5 bg-black" />
        </div>
    )
}