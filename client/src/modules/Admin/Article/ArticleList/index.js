import ArticleItem from "./ArticleItem"
import { useEffect, useState, useRef } from "react";

import useArticleAPI from "../../../../apis/server-api/admin-api/article-api"
import useSourceAPI from "../../../../apis/server-api/admin-api/source-api"

const List = (props) => { 
    const [articles, setArticles] = useState([]); 
    const [sources, setSources] = useState([]);
    const [updateArrticles, setUpdateArrticles] = useState(true);
    const mounted = useRef(false);

    const ArticleAPI = useArticleAPI();
    const SourceAPI = useSourceAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[props, updateArrticles])

    const loadData = async () => {
        const articleResponse = await ArticleAPI.getArticles();
        const sourcesResponse = await SourceAPI.getSources();
        const articleAfterFiltering = [];
        articleResponse.data.map((article, index) => {
            if(article.title.includes(props.query)) {
                articleAfterFiltering.push(article);
            }
        })

        if(mounted.current) {
            setSources(sourcesResponse.data);
            setArticles(articleAfterFiltering);
        }
    }

    const updateFromChild = () => {
        setUpdateArrticles(!updateArrticles)
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
            {
                articles ? 
                    articles.map((article, index) => {
                    const source = sources.find(source => source._id === article.source);
                    return (
                        <ArticleItem 
                            item={article} 
                            key={index}
                            index={index} 
                            source={source}
                            updateFromChild={updateFromChild} 
                            setFormState={props.setFormState} 
                            setFormPurpose={props.setFormPurpose}
                            setFormOriginalData={props.setFormOriginalData}>
                        </ArticleItem>
                    )
                })
                : <h1>Sever is not respons</h1>
            }
        </div>
      
    )

}

export default List;