import MainNews from "../../../shares/components/MainNews";
import MainNewsV2 from "../../../shares/components/MainNewsV2";
import SeeMore from "../../../shares/components/SeeMore";
import TopTitle from "../../../shares/components/TopTitle";

export default function Video(){
    return(
        <div>
            <TopTitle title="Video"/>
            <div>
                <MainNews/>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10">
                {
                    [1,2,3].map((data)=>(
                        <MainNewsV2/>
                    ))
                }
            </div>
            <SeeMore path="/category/video"/>
        </div>
    )
}