import ArticleItem from "./ArticleItem"
import { useEffect, useState, useRef } from "react";
import ArticleAPI from "../../../../apis/ArticleAPI"
import SourceAPI from "../../../../apis/SourceAPI"
import PrivateAPI from '../../../../apis/PrivateAPI'

const List = (props) => { 
    const [articles, setArticles] = useState([]); 
    const [sources, setSources] = useState([]);
    const [updateArrticles, setUpdateArrticles] = useState(true);
    const mounted = useRef(false);
    const getArrticles = PrivateAPI();


    useEffect(() => {
        mounted.current = true;
        loadData();
        return () => {mounted.current = false};
    },[props, updateArrticles])

    const loadData = async () => {
        const articleResponse = await ArticleAPI.getArticles();
        /**/ 
        // const articlesPrvResponse = await getArrticles();
        // console.log(articlesPrvResponse);
        /**/ 
        const sourcesResponse = await SourceAPI.getSources();
        if(mounted.current) {
            setSources(sourcesResponse.data);
            setArticles(articleResponse.data);
        }
    }

    const updateFromChild = () => {
        setUpdateArrticles(!updateArrticles)
    }

    return (
        <div className=" rounded-b-3xl bg-white m-8 mt-0 overflow-y-scroll">
            {
                articles.map((article, index) => {
                    const source = sources.find(source => source._id === article.sourceId);
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
            }
        </div>
      
    )

}

export default List;