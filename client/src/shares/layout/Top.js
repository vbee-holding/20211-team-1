import SubNew from "../components/SubNew"

export default function Top() {
    return (
        <div>
            {/* Navigation */}
            <div>
                <ul className="flex justify-between mb-3 text-lg font-semibold">
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
                <hr className="mb-6 border-2 border-black"/>
            </div>
            <div>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((data) => {
                        return (
                            <div>
                                <SubNew data={data} />
                                <hr className="border-b-2 mb-3"/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-end text-red-400 font-semibold">
                <div>
                    <button className="border-b-2 border-red-400">See more ...</button>
                </div>
            </div>
        </div>
    )
}