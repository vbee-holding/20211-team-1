import MainNewsV2 from "../../../shared/components/MainNewsV2";
import SubNewsV2 from "../../../shared/components/SubNewsV2";
import LazyLoad from 'react-lazyload'
import Loading from "../../../shared/components/LoadingV1";
import LoadingV1 from "../../../shared/components/LoadingV1";
import LoadingV2 from "../../../shared/components/LoadingV2";
export default function ListNews({ articles, reload }) {
    return (
        <div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-5">
                {articles.slice(0, 3).map((article) => (
                    <LazyLoad placeholder={<LoadingV1 />} key={article._id}>
                        <MainNewsV2 data={article}  reload={reload} />
                    </LazyLoad>
                ))
                }
            </div>
            <hr className="border-gray-300 bg-gray-300" />
            <div className="mt-3">
                {
                    articles.slice(4, 9).map((article) => (
                        <LazyLoad placeholder={<LoadingV2 />} key={article._id}>
                            <SubNewsV2 data={article}  reload={reload} />
                        </LazyLoad>
                    ))
                }
            </div>
        </div>
    )
}