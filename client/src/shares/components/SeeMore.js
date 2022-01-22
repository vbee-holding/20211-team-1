import { Link } from "react-router-dom";

export default function SeeMore({ path }) {
    return (
        <div className="flex justify-end text-red-400 font-semibold">
            <div>
                <button className="border-b-2 border-red-400">
                    <Link to={path}>
                        See more ...
                    </Link>
                </button>
            </div>
        </div>
    )
}