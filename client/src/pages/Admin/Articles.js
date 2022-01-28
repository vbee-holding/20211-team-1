import ArticleContainer from "../../modules/Admin/Article";
import { useNavigate} from "react-router-dom"
import { useEffect, useContext } from "react"
import AuthContext from "../../services/Admin/AuthContext";

const Article = () => {
    const { isLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogIn) navigate("/admin/login"); 
    })
    return <ArticleContainer/>
}

export default Article;