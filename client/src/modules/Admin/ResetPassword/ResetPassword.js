import AuthContext from "../../../services/Admin/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAPI from "../../../apis/server-api/admin-api/admin-api";

const ResetPassword = (props) => {
    const passwordMinSize = 6;
    
    const { isLogIn } = useContext(AuthContext);  
    const [password, setPassword] = useState({
        password : "",
        newPassword : "",
        retypePassword : "",
    });

    const [isCorrect, setIsCorrect] = useState(true);
    const [isCorrectLenth, setIsCorrectLenth] = useState(true);
    const [message, setMessage] = useState();
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        let curentPassword = password;
        let propertyUpdate = {
            [name] : value,
        }
        setPassword(Object.assign({}, curentPassword, propertyUpdate));
    }

    // const onBack = () => {
    //     props.setIsVerify(true);
    // }

    const onSubmit = async () => {
        if(isLogIn) {
            if(password.newPassword.length >= passwordMinSize && password.newPassword === password.retypePassword) {
                try {
                    setIsError(false);
                    const res = await AdminAPI.ressetPassword(password);
                        if(res.success) {
                        navigate("/admin/login");
                    }
                    else {
                        setIsError(true);
                        setMessage(res.message);
                        return;
                    }
                }
                catch (err) {
                    console.log(err);
                }
                
            }
            else {
                setIsCorrectLenth(password.newPassword.length >= passwordMinSize);
                setIsCorrect(password.newPassword === password.retypePassword);
                setIsError(false);
            }
        }
    }

    return (
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                
                <section>
                    <h3 className="font-bold text-2xl">Thiết lập lại mật khẩu </h3>
                </section>   
                <section className="mt-4"> 
                    <div className="space-y-4">
                        {
                            isLogIn &&  
                                <div >
                                    <label className="block font-bold mb-1" >Mật khẩu</label>
                                    <input 
                                        type="password"
                                        onChange={handleInputChange}
                                        value={password.password}
                                        name="password"
                                        className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                                    </input>
                                    {
                                        isError && <p className="text-red-600 font-semibold">{message}</p>
                                    }
                                </div>
                        }
                        <div >
                            <label className="block font-bold mb-1" >Mật khẩu mới</label>
                            <input 
                                type="password"
                                onChange={handleInputChange}
                                value={password.newPassword}
                                name="newPassword"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                            {
                                !isCorrectLenth && <label className=" font-semibold mb-1 text-red-500" >Mật khẩu phải ít nhất 6 ký tự</label>
                            }
                        </div>
                        <div >
                            <label className="block font-bold mb-1" >Xác nhận lại mật khẩu</label>
                            <input 
                                type="password" 
                                onChange={handleInputChange}
                                value={password.retypePassword}
                                name="retypePassword"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                            {
                                !isCorrect && <label className=" font-semibold mb-1 text-red-500" >Mật khẩu không trùng khớp</label>
                            }
                        </div>
                        <div className="flex flex-row justify-between">
                            {/* <button className="bg-white text-purple-600 hover:text-purple-700 ml-4 font-bold " onClick={onBack}>Back</button> */}
                            <button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-white py-2 w-1/4 shadow-lg hover:shadow-xl ml-auto" onClick={onSubmit}>Xác nhận</button>
                        </div>
                        
                    </div>
                </section>
            </main>
    )
}

export default ResetPassword;