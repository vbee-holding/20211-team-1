import SideBar from "../../../shares/layout/Admin/SideBar";
import Header from "../../../shares/layout/Admin/Header"
import SourceList from "./SourceList"
import SourceTableHeader from "./SourceTableHeader"
import { useState } from "react";
import FormSource from "./FormSource"
const Source = () => {
    const [formState, setFormState] = useState(false);
    const [formOriginalData, setFormOriginalData] = useState({});

    return (
        <div className="flex h-screen" >
            <SideBar/>
            {
                formState && <FormSource setFormState={setFormState} formOriginalData={formOriginalData} setFormOriginalData={setFormOriginalData}/>
            }
            <div className="flex flex-col bg-slate-200 basis-5/6 " >
                <Header canAdd={false} title="Danh sách các nguồn báo"/>
                <SourceTableHeader/>
                <SourceList formState={formState} setFormState={setFormState} setFormOriginalData={setFormOriginalData} />
            </div>  
        </div>      
    )
}

export default Source;