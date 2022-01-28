import SideBar from "../../../shares/layout/Admin/SideBar";
import Header from "../../../shares/layout/Admin/Header"
import CategoryList from "./CategoryList"
import CategoryTableHeader from "./CategoryTableHeader"

const Category = () => {

    return (
        <div className="flex h-screen" >
            <SideBar/>
            <div className="flex flex-col bg-slate-200 basis-5/6 " >
                <Header canAdd={false} title="Danh sách chuyên mục"/>
                <CategoryTableHeader/>
                <CategoryList />
            </div>  
        </div>      
    )
}

export default Category;