import CategoryContainer from "../../modules/Admin/Category";
import { useNavigate} from "react-router-dom"
import { useEffect, useContext } from "react"
import AuthContext from "../../services/Admin/AuthContext";

const Category = () => {
    const { isLogIn} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogIn) navigate("/admin/login"); 
    })

    return <CategoryContainer/>
}

export default Category;