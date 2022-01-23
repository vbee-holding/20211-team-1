import MainNewsV2 from "../../../shares/components/MainNewsV2";
import SubNewsV2 from "../../../shares/components/SubNewsV2";

export default function ListNews({articles}) {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {articles.slice(0,3).map((article) => (
                    <MainNewsV2 data={article} key={article._id} />
                ))
                }
            </div>
            <hr className="border-black mt-5 bg-black"  />
            <div className="mt-10">
                {
                   articles.slice(4,9).map((article)=>(
                        <SubNewsV2 data={article} key={article._id}/>
                    ))
                }
            </div>
        </div>
    )
}