import { useEffect, useState } from "react"
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../../routes/FEConstantRoutes"
import { getCategoryDetailsByID } from "../../../services/User/HomeServices"
import LoadingV2 from "../../components/LoadingV2"
import LazyLoad from 'react-lazyload'
import SubNews from "../../components/SubNews"
import SeeMore from "../../components/SeeMore"
export default function Top() {
    const [articles, setArticles] = useState(null)
    const [needReload, setNeedReload] = useState(0)
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getCategoryDetailsByID(FE_CATEGORY_CONSTANT_ROUTES.new.id)
            .then((result) => {
                setArticles(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [needReload])
    if (articles == null) {
        return (
            <LoadingV2 />
        )
    }
    return (
        <div>
            {/* Navigation */}
            <div>
                <div className="flex justify-between text-red-500 text-lg font-semibold">
                    Recent

                </div>
                <hr className="mb-3 border-red-500 border-1 bg-red-500 " />
            </div>
            <div>
                {
                    articles.slice(0, 7).map((article) => (
                        article &&
                        <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                            <SubNews data={article} reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.new.path} />
        </div>
    )
}