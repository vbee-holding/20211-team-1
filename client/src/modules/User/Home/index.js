import Entertainment from "./Entertainment";
import HotNewsCategory from "./HotNewsCategory";
import News from "./News";
import Sports from "./Sports";
import Technology from "./Technology";
import Video from "./Video";

export default function HomeContainer() {
    return (
        <div>
            <div className="">
                <HotNewsCategory />
            </div>
            <div className="">
                <News />
            </div>
            <div className="">
                <Entertainment />
            </div>
            <div className="">
                <Sports />
            </div>
            <div className="">
                <Technology />
            </div>
            <div className="">
                <Video />
            </div>
        </div>
    )
}