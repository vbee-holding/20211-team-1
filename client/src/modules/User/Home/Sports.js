import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Sports() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.sport.id)
            .then((result) => {
                console.log(result);
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
            <TopTitle title={"Thể thao"} />
            <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {
                        articles.slice(0, 2).map((article) => (
                            article && <MainNewsV3 data={article} key={article._id} />
                        ))
                    }
                </div>
                <div>
                    {
                        articles.slice(3, 8).map((article) => (
                            article && <SubNews data={article} key={article._id} />
                        ))
                    }
                </div>
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.sport.path} />
        </div>
    )
}