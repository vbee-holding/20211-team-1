import { useEffect, useState } from "react"
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../routes/FEConstantRoutes"
import { getCategoryDetailsByID } from "../../services/User/HomeServices"
import Loading from "../components/Loading"
import SeeMore from "../components/SeeMore"
import SubNew from "../components/SubNews"

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
            <Loading />
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
                        article && (<div key={article._id}>
                            <SubNew data={article} reload={() => setNeedReload(needReload + 1)} />
                        </div>)
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.new.path} />
        </div>
    )
}