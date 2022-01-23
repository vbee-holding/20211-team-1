import MainNewsV2 from "../../../shares/components/MainNewsV2";
import SubNewsV2 from "../../../shares/components/SubNewsV2";

export default function ListNews() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {/* {[1, 2, 3].map((data) => (
                    <MainNewsV2 />
                ))
                } */}
            </div>
            <hr className="border-black mt-5 bg-black"  />
            <div className="mt-10">
                {/* {
                    [1,2,3,4,5].map((data)=>(
                        <SubNewsV2 data={data}/>
                    ))
                } */}
            </div>
        </div>
    )
}