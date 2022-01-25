import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNews from "../../../shares/components/MainNews";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Entertainment() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.entertainment.id)
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
            <TopTitle title={"Giải trí"} />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} />
                    ))
                }
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-3 mt-5">
                {
                    articles.slice(2, 6).map((article) => (
                        article && <SubNews data={article} key={article._id} />
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.entertainment.path}/>
        </div>
    )
}