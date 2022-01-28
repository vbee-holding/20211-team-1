import SideBar from "../../../shared/layout/Admin/SideBar";
import Header from "../../../shared/layout/Admin/Header"
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