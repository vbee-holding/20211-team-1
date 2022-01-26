import MainNewsV2 from "../../../shared/components/MainNewsV2";
import SubNewsV2 from "../../../shared/components/SubNewsV2";

export default function ListNews({articles}) {
    return (
        <div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-5">
                {articles.slice(0,3).map((article) => (
                    <MainNewsV2 data={article} key={article._id} />
                ))
                }
            </div>
            <hr className="border-gray-300 bg-gray-300"  />
            <div className="mt-3">
                {
                   articles.slice(4,9).map((article)=>(
                        <SubNewsV2 data={article} key={article._id}/>
                    ))
                }
            </div>
        </div>
    )
}