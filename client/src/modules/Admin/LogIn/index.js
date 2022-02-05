import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AdminAPI from "../../../apis/server-api/admin-api/admin-api";
import AuthContext from "../../../services/Admin/AuthContext";


const LogIn = (props) => {
    const { logIn, logOut } = useContext(AuthContext);
    const [admin, setAdmin] = useState({
        email : "",
        password : "",
    });
    const [isCorrect, setIsCorrect] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userEmail");
        logOut();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let curentAdmin = admin;
        let propertyUpdate = {
            [name] : value,
        }
        setAdmin(Object.assign({}, curentAdmin, propertyUpdate));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsCorrect(true);
        const res = await AdminAPI.logIn(admin);
        if(res.status === 200) {
            logIn(res.data);
            localStorage.setItem('userEmail', JSON.stringify(admin.email));
            localStorage.setItem('Email', JSON.stringify(admin.email));
            navigate("/admin/articles");
        }
        else if(res.status === 400) {
            setIsCorrect(false);
        }
        else if(res.status === 500) {
            alert ("Có lỗi máy chủ vui lòng thử lái au vài phút");
        }
    }

    return (
        <div className="bg-violet-400 min-h-screen pt-20 pb-6 mt:pt-20">
            <header>
                <NavLink to="/">
                    <h1 className="text-4xl font-bold text-white text-center">{props.title}</h1>
                </NavLink>
            </header>
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                
                <section>
                    <h3 className="font-bold text-2xl">Welcome to log in page </h3>
                    <p className="text-gray-600 pt-2 font-semibold">Sign in to your account. </p>
                </section>   
                <section className="mt-10"> 
                    <div className="space-y-4">
                        <div >
                            <label className="block font-bold mb-1" >Email</label>
                            <input 
                                type="email" 
                                onChange={handleInputChange}
                                value={admin.email}
                                name="email"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        <div >
                            <label className="block font-bold mb-1" >Password</label>
                            <input 
                                type="password" 
                                onChange={handleInputChange}
                                value={admin.password}
                                name="password"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        {
                            !isCorrect && <p className="text-red-600 pt-2 font-semibold">Email hoặc mật khẩu không đúng </p>
                        }
                        <div >
                            <NavLink className="text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline mb-6 " to="/admin/reset-password" >Fogot your Password ?</NavLink>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-white py-2 w-full shadow-lg hover:shadow-xl" onClick={onSubmit} type="submit">Sign in</button>
                        
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LogIn;