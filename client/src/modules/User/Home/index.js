import Entertainment from "./Entertainment";
import HotNewsCategory from "./HotNewsCategory";
import News from "./News";
import Sports from "./Sports";
import Technology from "./Technology";
import Video from "./Video";

export default function HomeContainer() {
    return (
        <div>
            <div className="mt-1">
                <HotNewsCategory />
            </div>
            <div className="mt-10">
                <News />
            </div>
            <div className="mt-10">
                <Entertainment />
            </div>
            <div className="mt-10">
                <Sports />
            </div>
            <div className="mt-10">
                <Technology />
            </div>
            <div className="mt-10">
                <Video />
            </div>
        </div>
    )
}