import Connect from "./Connect";
import Top from "./Top";
import AdAside from "../../assets/images/ad-aside.png"
import Subscribe from "./Subscribe";
import Category from "./Category";
import LazyLoad from 'react-lazyload'
import LoadingV2 from "../components/LoadingV2";
export default function Aside() {
    return (
        <div>
            <div>
                <LazyLoad placeholder={<LoadingV2 />}>
                    <Top />
                </LazyLoad>
            </div>
            <div>
                <Connect />
            </div>
            <div className="mt-10">
                <img src={AdAside} alt="" />
            </div>
            <div>
                <Subscribe />
            </div>
            <div>
                <Category />
            </div>
        </div>
    )
}