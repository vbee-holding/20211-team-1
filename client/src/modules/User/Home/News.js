import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function News() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.new.id)
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
            <TopTitle title="Tin mới" />
            <div className="sm:grid sm:grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {
                        articles.slice(0, 2).map((article) => (
                            article && <MainNewsV3 data={article} key={article._id} />
                        ))
                    }
                </div>
                <div className="mt-5 sm:mt-0">
                    {
                        articles.slice(3, 10).map((article) => (
                            article && <SubNews data={article} key={article._id} />
                        ))
                    }
                </div>
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.new.path} />
        </div>
    )
}