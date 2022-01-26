import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import Loading from "../../../shared/components/Loading";
import MainNewsV3 from "../../../shared/components/MainNewsV3";
import SeeMore from "../../../shared/components/SeeMore";
import SubNews from "../../../shared/components/SubNews";
import TopTitle from "../../../shared/components/TopTitle";

export default function Sports() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.sport.id)
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
            <TopTitle title={"Thể thao"} />
            <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                <div className="grid gap-5">
                    {
                        articles.slice(0, 2).map((article) => (
                            article && <MainNewsV3 data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                        ))
                    }
                </div>
                <div className="mt-5 sm: mt-0" >
                    {
                        articles.slice(3, 9).map((article) => (
                            article && <SubNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                        ))
                    }
                </div>
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.sport.path} />
        </div>
    )
}