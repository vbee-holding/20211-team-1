import SourceContainer from "../../modules/Admin/Source";
import { useNavigate} from "react-router-dom"
import { useEffect, useContext } from "react"
import AuthContext from "../../services/Admin/AuthContext";

const Source = () => {
    const { isLogIn} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLogIn) navigate("/admin/login"); 
    })
    return <SourceContainer/>
}

export default Source; 