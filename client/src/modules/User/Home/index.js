import Entertainment from "./Entertainment";
import HotNewsCategory from "./HotNewsCategory";
import News from "./News";
import Sports from "./Sports";
import Technology from "./Technology";
import LazyLoad from 'react-lazyload'
import World from "./World";
import Loading from "../../../shared/components/LoadingV1";
import { useEffect } from "react";
export default function HomeContainer() {
    useEffect(()=>{
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    },[])
    return (
        <div>
            <div>
                
                    <HotNewsCategory />
                
            </div>
            <div>
                <LazyLoad placeholder={<Loading />}>
                    <News />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<Loading />}>
                    <Entertainment />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<Loading />}>
                    <Sports />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<Loading />}>
                    <Technology />
                </LazyLoad>
            </div>
            <div>
                <LazyLoad placeholder={<Loading />}>
                    <World />
                </LazyLoad>
            </div>
        </div>
    )
}