import SeeMore from "../components/SeeMore"
import SubNew from "../components/SubNews"

export default function Top() {
    return (
        <div>
            {/* Navigation */}
            <div>
                <ul className="flex justify-between mb-2 text-lg font-semibold">
                    <li>
                        <a href="#">
                            <span>Recent</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Trending</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Most Views</span>
                        </a>
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
            <SeeMore />
        </div>
    )
}