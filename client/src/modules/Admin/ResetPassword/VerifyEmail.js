import { useState } from "react";
import { NavLink } from "react-router-dom";

const VerifyEmail = (props) => {

    const [wasSent, setWasSent] = useState(false);
    const [data, setData] = useState({
        email : "",
        verifyCode : "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let curentData = data;
        let propertyUpdate = {
            [name] : value,
        }
        setData(Object.assign({}, curentData, propertyUpdate));
    } 

    const onSendRequest = () => {
        setWasSent(true);
    }

    const onVerifyRequest = () => {
        props.setIsVerify(false);
    }

    return (
            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                
                <section>
                    <h3 className="font-bold text-2xl">Thiết lập lại mật khẩu </h3>
                </section>   
                <section className="mt-4"> 
                    <div className="space-y-4">
                        <div >
                            <label className="block font-bold" >Email</label>
                            <input 
                                type="text" 
                                onChange={handleInputChange}
                                value={data.email}
                                name="email"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                            {
                                wasSent && <p className="text-gray-600 pt-2 font-semibold">Vui lòng đợi ít nhất 30s trước khi yêu cầu gửi lại email </p>
                            }
                            </div>
                        <div className="relative h-8">
                            <button className="absolute right-0 bg-purple-600 hover:bg-purple-700 rounded-2xl text-white py-2 px-2 w-1/4 shadow-lg hover:shadow-xl" onClick={onSendRequest}>{wasSent ? "Gửi lại email" : "Gửi Email"}</button>
                        </div>
                        
                        
                        <div >
                            <label className="block font-bold mb-1" >Mã xác nhận</label>
                            <p className="text-gray-600 pt-2 font-semibold">Điền mã 6 chữ số đã được gửi vào email của bạn </p>
                            <input 
                                type="password" 
                                onChange={handleInputChange}
                                value={data.verifyCode}
                                name="verifyCode"
                                className="font-semibold px-4 py-2 w-full rounded-xl border border-purple-700 focus:outline-violet-500"  >
                            </input>
                        </div>
                        <div className="flex flex-row justify-between">
                            <NavLink to="/admin/login" className="my-auto font-bold text-purple-600 hover:text-purple-700 ml-4">Back to login page</NavLink>                        
                            <button className="bg-purple-600 hover:bg-purple-700 rounded-2xl text-white py-2 px-2 w-1/4 shadow-lg hover:shadow-xl" onClick={onVerifyRequest}>Next</button>
                        </div>
                        
                    </div>
                </section>
            </main>
        )
}

export default VerifyEmail;