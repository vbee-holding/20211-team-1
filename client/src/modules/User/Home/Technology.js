import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Technology(){
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.technology.id)
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
            <TopTitle title="Công nghệ"/>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    {
                        articles.slice(0, 1).map((article) => (
                            article && <MainNewsV3 data={article} key={article._id} />
                        ))
                    }
                    <div className="mt-5">
                    {
                        articles.slice(2, 4).map((article) => (
                            article && <SubNews data={article} key={article._id} />
                        ))
                    }
                    </div>
                </div>
                <div>
                {
                        articles.slice(5, 6).map((article) => (
                            article && <MainNewsV3 data={article} key={article._id} />
                        ))
                    }
                    <div className="mt-5">
                    {
                        articles.slice(7, 9).map((article) => (
                            article && <SubNews data={article} key={article._id} />
                        ))
                    }
                    </div>
                </div>
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.technology.path}/>
        </div>
    )
}