import ArticleItem from "./ArticleItem"
import { useEffect, useState, useRef } from "react";

import useArticleAPI from "../../../../apis/server-api/admin-api/article-api"
import useSourceAPI from "../../../../apis/server-api/admin-api/source-api"
import loadingGif from "../../../../assets/images/Loading.gif"

const List = (props) => { 
    const [articles, setArticles] = useState([]); 
    const [sources, setSources] = useState([]);
    const [updateArrticles, setUpdateArrticles] = useState(true);
    const [Loading, setLoading] = useState(false);
    const mounted = useRef(false);

    const ArticleAPI = useArticleAPI();
    const SourceAPI = useSourceAPI();

    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[props, updateArrticles])

    const loadData = async () => {
        setLoading(true);
        const articleResponse = await ArticleAPI.getArticles();
        const sourcesResponse = await SourceAPI.getSources();
        const articleAfterFiltering = [];
        
        if(articleResponse && articleResponse.data){
            articleResponse.data.map((article, index) => {
                if(article.title.includes(props.query)) {
                    articleAfterFiltering.push(article);
                }
            })
        }

        if(articleAfterFiltering.length === 0) {
            alert('Không tìm thấy bài báo nào phù hợp');
        }

        if(mounted.current) {
            if( sourcesResponse.status === 200 ) {
                setSources(sourcesResponse.data.data);
            }
            setArticles(articleAfterFiltering);
        }
        setLoading(false);
    }

    const updateFromChild = () => {
        setUpdateArrticles(!updateArrticles)
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
            {
                Loading && (<img src={loadingGif} alt="" className="h-20 absolute right-12 top-56 mt-1"></img>)
            }   
            {
                articles && articles.map((article, index) => {
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
                            setFormOriginalData={props.setFormOriginalData}
                            setLoading={setLoading}>
                        </ArticleItem>
                    )
                })
            }
        </div>
      
    )

}

export default List;