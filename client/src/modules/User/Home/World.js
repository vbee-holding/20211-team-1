import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import MainNews from "../../../shared/components/MainNews";
import MainNewsV2 from "../../../shared/components/MainNewsV2";
import SeeMore from "../../../shared/components/SeeMore";
import TopTitle from "../../../shared/components/TopTitle";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "../../../shared/components/LoadingV1";
import LoadingV2 from "../../../shared/components/LoadingV2";
export default function World() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.world_travel.id)
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
        <div>
            <TopTitle title="Khám phá thế giới" />
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
            <div className="sm:grid sm:grid-cols-3 mt-4 sm:gap-2 lg:gap-7">
                {
                    articles.slice(2, 5).map((article) => (
                        article &&
                        <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                            <MainNewsV2 data={article}  reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path} />
        </div>
    )
}