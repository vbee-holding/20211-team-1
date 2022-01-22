import { Link } from "react-router-dom"
import SeeMore from "../components/SeeMore"
import SubNew from "../components/SubNews"

export default function Top() {
    return (
        <div>
            {/* Navigation */}
            <div>
                <ul className="flex justify-between mb-2 text-lg font-semibold">
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
                <hr className="mb-3 border-black border-1 bg-black" />
            </div>
            <div>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((data) => {
                        return (
                            <div key={data}>
                                <SubNew data={data} />
                            </div>
                        )
                    })
                }
            </div>
            <SeeMore path="/category/top"/>
        </div>
    )
}