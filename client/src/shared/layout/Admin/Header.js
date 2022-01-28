import searchIcon from '../../../assets/images/search-icon.png'
import AdminAPI from '../../../apis/server-api/admin-api/admin-api';
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Header = (props) => {

    const [isOptinonMenu, setIsOptinMenu] = useState(false);
    const navigate = useNavigate();

    const onClickAdd = () => {
        props.setFormState(true);
        props.setFormPurpose("Add");
    }

    const onClickOption = () => {
        setIsOptinMenu(!isOptinonMenu);
    }

    const onClickChangePassWord = () => {
        navigate('/admin/reset-password');
    }

    const onClickLogOut = async () => {
        const res = await AdminAPI.logOut();
        navigate("/admin/login");
    }

    const onSubmitSearch = () => {

    }

    return (
        <div>
            <div className="flex flex-row justify-between mt-5 mx-10 basis-1/5 " >
                <div className="flex items-center h-14 basis-1/3 relative">
                    <button className="h-1/2 mx-4 absolute">
                        <img src={searchIcon} alt="" className=""/>
                    </button>
                    <input type="text" className="h-full w-full rounded-full px-14 font-semibold text-xl border border-indigo-500 focus:outline-violet-600" placeholder="Search here ..."></input>
                </div>
                <div className="flex flex-col relative basis-1/4">
                    <div className="absolute right-0 flex items-center ">
                        <button className="m-4 font-bold text-2xl underline underline-offset-8" onClick={onClickOption}>{JSON.parse(localStorage.getItem('userEmail'))}</button>    
                    </div>
                    {
                        isOptinonMenu && 
                        <div className="flex flex-col bg-white rounded-xl absolute mt-16 mr-16 right-0 border-2">
                            <p className="font-bold text-xl border-b-2 m-4 text-left pb-2">Email : {JSON.parse(localStorage.getItem('userEmail'))}</p>
                            <button className="font-bold text-xl text-left mx-4 my-2" onClick={onClickChangePassWord}>Đổi mật khẩu</button>
                            <button className="font-bold text-xl text-left mx-4 my-2" onClick={onClickLogOut}>Đăng xuất</button>
                        </div>  
                    }   
                    
                
                </div>
            </div>
            <div className="flex flex-row m-10 justify-between">
                <div className="flex items-center h-16">
                    <h1 className="text-4xl font-mono font-bold h-8">{props.title}</h1>
                </div>
                {
                    props.canAdd &&  <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-40 h-16 text-2xl mr-10" onClick={onClickAdd} >Thêm mới</button>
                }
            </div>
           
        </div>
    )
}

export default Header;