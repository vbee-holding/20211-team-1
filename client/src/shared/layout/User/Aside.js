import Connect from "./Connect";
import Top from "./Top";
import AdAside from "../../../assets/images/ad-aside.png"
import Subscribe from "./Subscribe";
import Category from "./Category";
import LazyLoad from 'react-lazyload'
import LoadingV2 from "../../components/LoadingV2";
//import LoadingV2 from "../components/LoadingV2";
export default function Aside() {
    return (
        <div>
            <div>
                <LazyLoad placeholder={<LoadingV2 />}>
                    <Top />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<LoadingV2 />}>
                    <Connect />
                </LazyLoad>
            </div>
            <div className="mt-10">
                <LazyLoad placeholder={<LoadingV2 />}>
                    <img src={AdAside} alt="" />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<LoadingV2 />}>
                    <Subscribe />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<LoadingV2 />}>
                    <Category />
                </LazyLoad>
            </div>
        </div>
    )
}