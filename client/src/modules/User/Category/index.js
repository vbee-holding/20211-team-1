import MainNews from "../../../shares/components/MainNews";
import ListNews from "./ListNews";

export default function CategoryContainer(){
    return(
        <div>
            <div className="mt-10">
            {/* <MainNews/> */}
            </div>
            <div className="mt-10">
            <ListNews/>
            </div>
            <div className="mt-10">
            <ListNews/>
            </div>
            <div className="mt-10">
            <ListNews/>
            </div>
            <div className="mt-10">
            <ListNews/>
            </div>
            <div className="mt-10">
            <ListNews/>
            </div>
        </div>
    )
}