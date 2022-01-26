import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import Loading from "../../../shared/components/Loading";
import MainNews from "../../../shared/components/MainNews";
import MainNewsV2 from "../../../shared/components/MainNewsV2";
import SeeMore from "../../../shared/components/SeeMore";
import TopTitle from "../../../shared/components/TopTitle";

export default function Video() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.world_travel.id)
            .then((result) => {
                setArticles(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    if (articles == null) {
        return (
            <Loading/>
        )
    }
    return (
        <div>
            <TopTitle title="Khám phá thế giới" />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <div className="sm:grid sm:grid-cols-3 mt-4 sm:gap-2 lg:gap-7">
                {
                    articles.slice(2, 5).map((article) => (
                        article && <MainNewsV2 data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.world_travel.path} />
        </div>
    )
}