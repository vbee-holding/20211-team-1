import SideBar from "../../../shared/layout/Admin/SideBar";
import Header from "../../../shared/layout/Admin/Header"
import ArticleList from "./ArticleList"
import ArticleTableHeader from "./ArticleTableHeader"
import FormArticle from "./FormArticle";
import useSourceAPI from "../../../apis/server-api/admin-api/source-api";
import { useState } from "react";

const Article = () => {
    const [formState, setFormState] = useState(false);
    const [formPurpose, setFormPurpose] = useState("Add");
    const [formOriginalData, setFormOriginalData] = useState({});
    const [update, setUpdate] = useState(true);
 
    const updateFromChild = () => {
        setUpdate(!update);
    }

    return (
        <div className="flex h-screen max-w-full" >
            <SideBar/>
            {
                formState && <FormArticle setFormState={setFormState} purpose={formPurpose} formOriginalData={formOriginalData} setFormOriginalData={setFormOriginalData}/>
            }
            <div className="flex flex-col bg-slate-200 basis-5/6">
                <Header setFormState={setFormState} setFormPurpose={setFormPurpose} title="Danh sách bài báo" canCrawl = {true} updateFromChild={updateFromChild}/>
                <ArticleTableHeader/>
                <ArticleList formState={formState}  setFormState={setFormState} setFormPurpose={setFormPurpose} setFormOriginalData={setFormOriginalData} />
            </div>  
        </div>      
    )
}

export default Article;