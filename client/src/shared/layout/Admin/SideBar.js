import hommeIcon from "../../../assets/images/home-icon.png";
import articleIcon from "../../../assets/images/article-icon.png";
import categoryIcon from "../../../assets/images/category-icon.png";
import sourceIcon from "../../../assets/images/source-icon.png";
import logo from "../../../assets/images/logo-admin.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {


    return (
        <div className="m-5 basis-1/6 ">
            <img src={logo} className="mx-10" alt=""></img>
            <div className="mx-10 mt-10">
                <NavLink className="flex flex-row py-4" to="/admin/articles" >
                    <img src={hommeIcon} alt=""></img>
                    <p className="text-xl font-bold mt-1 ml-8 text-slate-300 hover:text-2xl hover:text-slate-700 ">Dashboard</p>
                </NavLink>
                <NavLink className="flex flex-row py-4" to="/admin/articles" >
                    <img src={articleIcon} alt=""></img>
                    <p className="text-xl font-bold mt-1 ml-8 text-slate-300 hover:text-2xl hover:text-slate-700 ">Articles</p>
                </NavLink>
                <NavLink className="flex flex-row py-4" to="/admin/categories" >
                    <img src={categoryIcon} alt=""></img>
                    <p className="text-xl font-bold mt-1 ml-8 text-slate-300 hover:text-2xl hover:text-slate-700 ">Categories</p>
                </NavLink>
                <NavLink className="flex flex-row py-4" to="/admin/sources" >
                    <img src={sourceIcon} alt=""></img>
                    <p className="text-xl font-bold mt-1 ml-8 text-slate-300 hover:text-2xl hover:text-slate-700 ">Source</p>
                </NavLink>
                
            </div>   
        </div>
        
    )
}

export default NavBar;