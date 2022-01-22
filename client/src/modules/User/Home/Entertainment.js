import MainNews from "../../../shares/components/MainNews";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function Entertainment() {
    return (
        <div>
            <TopTitle title={"Giải trí"} />
            <div>
                <MainNews />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-10">
                {
                    [1, 2, 3].map((data) => (
                        <SubNews data={data} key={data} />
                    ))
                }
            </div>
            <SeeMore />
        </div>
    )
}