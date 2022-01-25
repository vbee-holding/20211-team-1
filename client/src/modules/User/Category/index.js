import { useEffect, useState } from "react";
import { getArticlesByCategoryId } from "../../../services/User/HomeServices";
import MainNews from "../../../shares/components/MainNews";
import TopTitle from "../../../shares/components/TopTitle";
import ListNews from "./ListNews";

export default function CategoryContainer({ id }) {
    const NUMBER_OF_ARTICLE_IN_GROUP = 9;
    const [articles, setArticles] = useState(null);
    const [articleGroups,setArticleGroups] = useState([]);
    const pagination = (group) => {
        let startIndex = 0;
        let temp=[];
        for (let i = 0; i <= group.length / NUMBER_OF_ARTICLE_IN_GROUP; i++) {
            temp.push(group.slice(startIndex + 1, startIndex + NUMBER_OF_ARTICLE_IN_GROUP));
            startIndex += NUMBER_OF_ARTICLE_IN_GROUP;
        }
        setArticleGroups(temp)
    }
    useEffect(() => {
        getArticlesByCategoryId(id)
            .then((result) => {
                setArticles(result);
                pagination(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id])
    if (articles == null) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div>
            <TopTitle title="Tin chính" />
            <div className="">
                {
                    articles.slice(0, 1).map((article) => (
                        article && <MainNews data={article} key={article._id} />
                    ))
                }
            </div>
            {
                articleGroups.map((articleGroup, index) => (
                    <div className="mt-5" key={index}>
                        <ListNews articles={articleGroup}/>
                    </div>
                ))
            }
        </div>
    )
}