import SideBar from "../../../shares/layout/Admin/SideBar";
import Header from "../../../shares/layout/Admin/Header"
import ArticleList from "./ArticleList"
import ArticleTableHeader from "./ArticleTableHeader"
import FormArticle from "./FormArticle";
import { useState } from "react";

const Article = () => {
    const [formState, setFormState] = useState(false);
    const [formPurpose, setFormPurpose] = useState("Add");
    const [formOriginalData, setFormOriginalData] = useState({});

    return (
        <div className="flex h-screen" >
            <SideBar/>
            {
                formState && <FormArticle setFormState={setFormState} purpose={formPurpose} formOriginalData={formOriginalData} setFormOriginalData={setFormOriginalData}/>
            }
            <div className="flex flex-col bg-slate-200 basis-5/6">
                <Header setFormState={setFormState} setFormPurpose={setFormPurpose} canAdd={true} title="Danh sách bài báo"/>
                <ArticleTableHeader/>
                <ArticleList formState={formState}  setFormState={setFormState} setFormPurpose={setFormPurpose} setFormOriginalData={setFormOriginalData}  />
            </div>  
        </div>      
    )
}

export default Article;