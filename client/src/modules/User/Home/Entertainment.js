import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import Loading from "../../../shared/components/Loading";
import MainNews from "../../../shared/components/MainNews";
import SeeMore from "../../../shared/components/SeeMore";
import SubNews from "../../../shared/components/SubNews";
import TopTitle from "../../../shared/components/TopTitle";

export default function Entertainment() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.entertainment.id)
            .then((result) => {
                console.log(result);
                setArticles(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [needReload])
    if (articles == null) {
        return (
            <Loading/>
        )
    }

    return (
        <div>
            <TopTitle title={"Giải trí"} />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <div className="sm:grid sm:grid-cols-2 gap-3 mt-5">
                {
                    articles.slice(2, 6).map((article) => (
                        article && <SubNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.entertainment.path} />
        </div>
    )
}