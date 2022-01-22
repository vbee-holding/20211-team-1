import { useEffect, useState } from "react";
import { getAllArticle, getArticleById } from "../../../services/User/HomeServices";
import MainNewsV3 from "../../../shares/components/MainNewsV3";
import SeeMore from "../../../shares/components/SeeMore";
import SubNews from "../../../shares/components/SubNews";
import TopTitle from "../../../shares/components/TopTitle";

export default function News() {
    const [article, setArticle] = useState(null)
    useEffect(()=>{
        getArticleById("61ddafd57afaeb8de319db75")
        .then((result)=>{
            console.log(result);
            setArticle(result);
        })
        .catch(err=>{
            console.log(err);
        });
    },[])
    console.log(article)
    return (
        <div>
            <TopTitle title="Tin mới" />
            <div className="grid grid-cols-2 gap-5">
                <div className="grid gap-5">
                    {
                        [article, article].map((article) => (
                        article && <MainNewsV3 data={article}  />
                        ))
                    }
                </div>
                <div>
                    {
                        [1, 2, 3, 4, 5].map((data) => (
                            <SubNews data={data} key={data} />
                        ))
                    }
                </div>
            </div>
            <SeeMore path="/category/new"/>
        </div>
    )
}