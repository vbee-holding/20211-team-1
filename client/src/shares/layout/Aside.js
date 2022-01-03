import Connect from "./Connect";
import Top from "./Top";
import AdAside from "../../assets/images/ad-aside.png"
import Subscribe from "./Subscribe";
import Category from "./Category";
export default function Aside() {
    return (
        <div>
            <div>
                <Top />
            </div>
            <div>
                <Connect />
            </div>
            <div className="mt-10">
                <img src={AdAside} alt="" />
            </div>
            <div>
                <Subscribe/>
            </div>
            <div>
                <Category/>
            </div>
        </div>
    )
}