import SideBar from "../../../shared/layout/Admin/SideBar";
import Header from "../../../shared/layout/Admin/Header"
import CategoryList from "./CategoryList"
import CategoryTableHeader from "./CategoryTableHeader"
import FormCategory from "./FormCategory"
import { useState } from "react";

const Category = () => {
    const [formState, setFormState] = useState(false);
    const [formOriginalData, setFormOriginalData] = useState({});
    const [formPurpose, setFormPurpose] = useState("Add");
    const [isInQuery, setIsInQuery] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <div className="flex h-screen" >
            <SideBar/>
            {
                formState && 
                    <FormCategory 
                        setFormState={setFormState} 
                        purpose={formPurpose} 
                        formOriginalData={formOriginalData} 
                        setFormOriginalData={setFormOriginalData}/>
            }
            <div className="flex flex-col bg-slate-200 basis-5/6 " >
                <Header 
                    setFormState={setFormState} 
                    setFormPurpose={setFormPurpose} 
                    title="Danh sách các chuyên mục" 
                    isArticle = {false}                    
                    setQuery={setQuery}
                    setIsInQuery={setIsInQuery}
                    searchProperty={"name"}/>
                <CategoryTableHeader/>
                <CategoryList 
                    formState={formState} 
                    setFormState={setFormState} 
                    setFormPurpose={setFormPurpose} 
                    setFormOriginalData={setFormOriginalData}
                    isInQuery={isInQuery}
                    query={query}/>
            </div>  
        </div>      
    )
}

export default Category;