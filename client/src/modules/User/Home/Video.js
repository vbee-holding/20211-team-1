import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNews from "../../../shares/components/MainNews";
import MainNewsV2 from "../../../shares/components/MainNewsV2";
import SeeMore from "../../../shares/components/SeeMore";
import TopTitle from "../../../shares/components/TopTitle";

export default function Video() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
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
            <div>Loading</div>
        )
    }
    return (
        <div>
            <TopTitle title="Video" />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} />
                    ))
                }
            </div>
            <div className="sm:grid sm:grid-cols-3 mt-4 sm:gap-2 lg:gap-7">
                {
                    articles.slice(2,5).map((article) => (
                       article && <MainNewsV2 data={article} key={article._id}/>
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.video.path} />
        </div>
    )
}