import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import MainNewsV3 from "../../../shared/components/MainNewsV3";
import SeeMore from "../../../shared/components/SeeMore";
import SubNews from "../../../shared/components/SubNews";
import TopTitle from "../../../shared/components/TopTitle";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "../../../shared/components/LoadingV1";
import LoadingV2 from "../../../shared/components/LoadingV2";
export default function News() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.new.id)
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
            <TopTitle title="Tin mới" />
            <div className="sm:grid sm:grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {
                        articles.slice(0, 2).map((article) => (
                            article &&
                            <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                                <MainNewsV3 data={article}  reload={() => setNeedReload(needReload + 1)} />
                            </LazyLoad>
                        ))
                    }
                </div>
                <div className="mt-5 sm:mt-0">
                    {
                        articles.slice(3, 10).map((article) => (
                            article && 
                            <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                            <SubNews data={article} reload={() => setNeedReload(needReload + 1)} />
                            </LazyLoad>
                        ))
                    }
                </div>
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.new.path} />
        </div>
    )
}