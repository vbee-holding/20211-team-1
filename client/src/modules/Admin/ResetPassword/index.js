import { NavLink } from "react-router-dom";
import VerifyEmail from "./VerifyEmail";
import ResetPassword from "./ResetPassword";
import AuthContext from "../../../services/Admin/AuthContext";
import { useContext, useState } from "react";

const LogIn = (props) => {
    
    const { isLogIn } = useContext(AuthContext);  
    const [isVerify, setIsVerify] = useState(!isLogIn);

    return (
        <div className="bg-violet-400 min-h-screen pt-20 pb-6 mt:pt-20">
            <header>
                <NavLink to="">
                    <h1 className="text-4xl font-bold text-white text-center">Báo mới hơn báo mới</h1>
                </NavLink>
            </header>
            {
                isVerify ? <VerifyEmail setIsVerify={setIsVerify}/> : <ResetPassword setIsVerify={setIsVerify} />
            }
            
        </div>
    )
}

export default LogIn;