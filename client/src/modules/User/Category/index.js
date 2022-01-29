import { useEffect, useState } from "react";
import { getCategoryDetailsByID } from "../../../services/User/HomeServices";
import MainNews from "../../../shared/components/MainNews";
import TopTitle from "../../../shared/components/TopTitle";
import ListNews from "./ListNews";
import LazyLoad from 'react-lazyload'
import LoadingV1 from "../../../shared/components/LoadingV1";
export default function CategoryContainer({ id }) {
    const [needReload, setNeedReload] = useState(1)
    const NUMBER_OF_ARTICLE_IN_GROUP = 9;
    const [articles, setArticles] = useState(null);
    const [articleGroups, setArticleGroups] = useState([]);
    const pagination = (group) => {
        let startIndex = 0;
        let temp = [];
        for (let i = 0; i <= group.length / NUMBER_OF_ARTICLE_IN_GROUP; i++) {
            temp.push(group.slice(startIndex + 1, startIndex + NUMBER_OF_ARTICLE_IN_GROUP));
            startIndex += NUMBER_OF_ARTICLE_IN_GROUP;
        }
        setArticleGroups(temp)
    }
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        getCategoryDetailsByID(id)
            .then((result) => {
                setArticles(result);
                pagination(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id, needReload])
    if (articles == null) {
        return (
            <LoadingV1 />
        )
    }

    return (
        <div>
            <TopTitle title="Tin chính" />
            <div>
                {
                    articles.slice(0, 1).map((article) => (
                        article &&
                        <LazyLoad placeholder={<LoadingV1 />}  key={article._id}>
                            <MainNews data={article} reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    ))
                }
            </div>
            {
                articleGroups.map((articleGroup, index) => (
                    <div className="mt-5" key={index}>
                        <LazyLoad placeholder={<LoadingV1 />}>
                            <ListNews articles={articleGroup} reload={() => setNeedReload(needReload + 1)} />
                        </LazyLoad>
                    </div>
                ))
            }
        </div>
    )
}