import SideBar from "../../../shared/layout/Admin/SideBar";
import Header from "../../../shared/layout/Admin/Header"
import ArticleList from "./ArticleList"
import ArticleTableHeader from "./ArticleTableHeader"
import FormArticle from "./FormArticle";
import { useState } from "react";

const Article = () => {
    const [formState, setFormState] = useState(false);
    const [formPurpose, setFormPurpose] = useState("Add");
    const [formOriginalData, setFormOriginalData] = useState({});
    const [update, setUpdate] = useState(true);
    const [isInQuery, setIsInQuery] = useState(false);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [prePage, setPrePage] = useState(1);
    const [numsPage, setNumsPage] = useState(0);

    const updateFromChild = () => {
        setUpdate(!update);
    }

    const isEnter = (e) => {
        if(e.key === 'Enter')  {
            setPrePage(page)
            setPage(e.target.value - 1);  
        }
    }

    return (
        <div className="flex h-screen max-w-full relative" >
            <SideBar/>
            {
                formState && 
                    <FormArticle 
                        setFormState={setFormState} 
                        purpose={formPurpose} 
                        formOriginalData={formOriginalData} 
                        setFormOriginalData={setFormOriginalData}/>
            }
            <div className="flex flex-col bg-slate-200 basis-5/6 relative">
                <Header 
                    setFormState={setFormState} 
                    setFormPurpose={setFormPurpose} 
                    title="Danh sách bài báo" 
                    isArticle = {true} 
                    updateFromChild={updateFromChild} 
                    setQuery={setQuery}
                    setIsInQuery={setIsInQuery}
                    searchProperty={"title"}/>
                <ArticleTableHeader 
                    numsPage={numsPage}
                    page={page}/>
                <ArticleList 
                    formState={formState}  
                    setFormState={setFormState} 
                    setFormPurpose={setFormPurpose} 
                    setFormOriginalData={setFormOriginalData} 
                    isInQuery={isInQuery}
                    query={query}
                    page={page}
                    setPage={setPage}
                    prePage={prePage}
                    setNumsPage={setNumsPage}/>
                <div className="flex flex-row justify-end relative mr-16 mb-2">
                    <div className="flex">
                        <p className="font-bold m-auto mr-10 text-xl">Go to page</p>
                    </div>
                    <input 
                        className="h-10 w-16 rounded-lg pl-4 font-bold"
                        type="number"
                        onKeyPress={isEnter}>
                    </input>
                
                </div>
            </div>  
        </div>      
    )
}

export default Article;

