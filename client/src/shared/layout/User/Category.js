import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getAllCategory } from "../../../services/User/HomeServices";
import LoadingV2 from "../../components/LoadingV2";
import TopTitle from "../../components/TopTitle";

export default function Category() {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        getAllCategory()
            .then((result) => {
                setCategories(result);
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    if (categories == null) {
        return (
            <LoadingV2 />
        )
    }
    return (
        <div className="mt-10">
            <TopTitle title={"Category"} />
            <div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.health.path} className="block ml-4">Sức khỏe</a>
                    </div>
                    <div className="inline-block bg-red-500 p-1 text-white">{categories[0].count}</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.entertainment.path} className="block ml-4">Giải trí</a>
                    </div>
                    <div className="inline-block bg-purple-600 p-1 text-white">{categories[1].count}</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.sport.path} className="block ml-4">Thể thao</a>
                    </div>
                    <div className="inline-block bg-pink-500 p-1 text-white">{categories[2].count}</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.technology.path} className="block ml-4">Công nghệ</a>
                    </div>
                    <div className="inline-block bg-blue-600 p-1 text-white">{categories[3].count}</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.vietnam_travel.path} className="block ml-4">Khám phá Việt Nam</a>
                    </div>
                    <div className="inline-block bg-pink-500 p-1 text-white">{categories[4].count}</div>
                </div>
                <div className="flex justify-between mb-4 text-base font-bold">
                    <div className="flex align-top">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 align-middle flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <a href={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path} className="block ml-4">Khám phá thế giới</a>
                    </div>
                    <div className="inline-block bg-blue-400 p-1 text-white">{categories[5].count}</div>
                </div>
            </div>
            <hr className="border-black mb-5 bg-black" />
        </div>
    )
}