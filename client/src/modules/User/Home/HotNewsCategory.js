import { useEffect, useState } from "react";
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import Loading from "../../../shared/components/Loading";
import MainNews from "../../../shared/components/MainNews";
import SeeMore from "../../../shared/components/SeeMore";
import SubNews from "../../../shared/components/SubNews";
import TopTitle from "../../../shared/components/TopTitle";

export default function HotNewsCategory() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(1)
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.hot.id)
            .then((result) => {
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
        <div className="overflow-hidden">
            <TopTitle title="Tin nóng" />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <hr className="border-gray-300 mb-2 mt-2 bg-black" />
            <div className="sm:grid sm:grid-cols-2 gap-3 ">
                {
                    articles.slice(2, 6).map((article) => (
                        article && <SubNews data={article} key={article._id} reload={() => setNeedReload(needReload + 1)} />
                    ))
                }
            </div>
            <SeeMore path="/category/hot" />
        </div>
    )
}