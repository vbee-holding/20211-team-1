import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FE_CATEGORY_CONSTANT_ROUTES } from "../../routes/FEConstantRoutes"
import { getArticlesByCategoryId } from "../../services/User/HomeServices"
import SeeMore from "../components/SeeMore"
import SubNew from "../components/SubNews"

export default function Top() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        getArticlesByCategoryId(FE_CATEGORY_CONSTANT_ROUTES.top.id)
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
            {/* Navigation */}
            <div>
                <ul className="flex justify-between text-red-300 text-lg font-semibold">
                    <li>
                        <Link to="/">
                            <span>Recent</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span>Trending</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span>Most Views</span>
                        </Link>
                    </li>
                </ul>
                <hr className="mb-3 border-gray-400 border-1 bg-gray-400" />
            </div>
            <div>
                {
                    articles.slice(0, 7).map((article) => (
                        article && (<div key={article._id}>
                            <SubNew data={article} />
                        </div>)
                    ))
                }
            </div>
            <SeeMore path={FE_CATEGORY_CONSTANT_ROUTES.top.path} />
        </div>
    )
}