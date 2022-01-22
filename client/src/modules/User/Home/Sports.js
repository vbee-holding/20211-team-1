import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Sports(){
    return(
        <div>
            <TopTitle title={"Thể thao"}/>
            <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {
                        [1,2].map(()=>(
                            <MainNewsV3/>
                        ))
                    }
                </div>
                <div>
                    {
                        [1,2,3,4,5].map((data)=>(
                            <SubNews data={data} key={data}/>
                        ))
                    }
                </div>
            </div>
            <SeeMore/>
        </div>
    )
}