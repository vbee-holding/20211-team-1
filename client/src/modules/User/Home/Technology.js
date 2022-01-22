import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Technology(){
    return (
        <div>
            <TopTitle title="Công nghệ"/>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    {/* <MainNewsV3/> */}
                    <div className="mt-5">
                        {
                            [1,2].map((data)=>(
                                <SubNews data={data} key={data}/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {/* <MainNewsV3/> */}
                    <div className="mt-5">
                        {
                            [1,2].map((data)=>(
                                <SubNews data={data} key={data}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <SeeMore path="/category/technology"/>
        </div>
    )
}