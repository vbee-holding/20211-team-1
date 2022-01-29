import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import MainNews from "../../../shared/components/MainNews";
import SeeMore from "../../../shared/components/SeeMore";
import SubNews from "../../../shared/components/SubNews";
import TopTitle from "../../../shared/components/TopTitle";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "../../../shared/components/LoadingV1";
import LoadingV2 from "../../../shared/components/LoadingV2";
export default function HotNewsCategory() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.hot.id)
            .then((result) => {
                setArticles(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    if (articles == null) {
        return (
            <LoadingV1 />
        )
    }
    return (
        <div className="overflow-hidden">
            <TopTitle title="Tin nóng" />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article &&
                        <LazyLoad placeholder={<LoadingV1 />} key={article._id}>
                            <MainNews data={article}  reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    ))
                }
            </div>
            <hr className="border-gray-300 mb-2 mt-2 bg-black" />
            <div className="sm:grid sm:grid-cols-2 gap-3 ">
                {
                    articles.slice(2, 6).map((article) => (
                        article &&
                        <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                            <SubNews data={article}  reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.hot.path} />
        </div>
    )
}