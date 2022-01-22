import MainNews from "../../../shares/components/MainNews";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function HotNewsCategory(){
    return (
        <div className="overflow-hidden">
            <TopTitle title="Tin nóng"/>
            <div>
            <MainNews/>
            </div>
            <hr className="border-gray-300 mb-2 mt-5 bg-black" />
            <div className="grid grid-cols-2 gap-5 ">
                {[1,2,3,4].map((data)=>(
                    <SubNews data={data} key={data}/>
                ))
}
            </div>
                <SeeMore/>
        </div>
    )
}