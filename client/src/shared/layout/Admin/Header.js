import searchIcon from '../../../assets/images/search-icon.png'
import AdminAPI from '../../../apis/server-api/admin-api/admin-api';
import useArticleAPI from '../../../apis/server-api/admin-api/article-api';
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Header = (props) => {

    const [isOptionMenu, setIsOptionMenu] = useState(false);
    const [isOptionArticleMenu, setIsOptionArticleMenu] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const ArticleAPI = useArticleAPI();

    const onClickAdd = () => {
        props.setFormState(true);
        props.setFormPurpose("Add");
    }

    const onClickOption = () => {
        setIsOptionMenu(!isOptionMenu);
    }

    const onClickArticleOption = () => {
        setIsOptionArticleMenu(!isOptionArticleMenu);
    }

    const onClickChangePassWord = () => {
        navigate('/admin/reset-password');
    }

    const onClickLogOut = async () => {
        await AdminAPI.logOut();
        navigate("/admin/login");
    }

    const onInputChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    }

    const onSubmitSearch = () => {
        props.setIsInQuery(true);
        props.setQuery(query);
    }

    const isEnter = (event) => {
        if(event.key == 'Enter') onSubmitSearch();
    }
    
    const onClickCrawl = async () => {
            const res = await AdminAPI.crawlData(); 
            if (res && res.success) {
                alert ((res.msg ? res.msg : "Thực hiện Thành công" ) + " vui lòng đợi một vài phút để danh sách cập nhật các bài báo đã có sẽ không được thêm lại");
            }
            else alert ("Có lỗi xảy ra vui lòng thử lại");
        setIsOptionArticleMenu(!isOptionArticleMenu);
        props.updateFromChild();
    }

    const onClickHide = async () => {
            const res = await ArticleAPI.hideData(); 
            if(res.status === 200) {
                alert ((res.msg ? res.msg : "Thực hiện hành công" ) + " vui lòng đợi một vài phút để danh sách cập nhật");
            }
            else if (res.status === 500) {
                alert ((res.msg ? res.msg : "Có lỗi xảy ra" ) + " vui lòng thử lại");
                return;
            }
        setIsOptionArticleMenu(!isOptionArticleMenu);
        props.updateFromChild();
    }

    return (
        <div>
            <div className="flex flex-row justify-between mt-5 mx-10 basis-1/5 " >
                <div className="flex items-center h-14 basis-1/3 relative">
                    <input 
                        type="text" 
                        placeholder={`Search by ${props.searchProperty} ...`} 
                        onChange={onInputChange}
                        value={query}
                        onKeyPress={isEnter}
                        className="h-full w-full rounded-full pr-14 pl-8 font-semibold text-xl border border-indigo-500 focus:outline-violet-600"></input>
                    <button className="h-1/2 mx-4 right-0 absolute" onClick={onSubmitSearch}>
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
                <div className="flex flex-col relative basis-1/4">
                    <div className="absolute right-0 flex items-center ">
                        <button className="m-4 font-bold text-2xl underline underline-offset-8" onClick={onClickOption}>{localStorage.getItem('userEmail') ? JSON.parse(localStorage.getItem('userEmail')) : "User name"} </button>    
                    </div>
                    {
                        isOptionMenu && 
                        <div className="flex flex-col bg-white rounded-xl absolute mt-16 mr-16 right-0 border-2 z-10 drop-shadow-2xl">
                            <p className="font-bold text-xl border-b-2 m-4 text-left pb-2">Email : {localStorage.getItem('userEmail') ? JSON.parse(localStorage.getItem('userEmail')) : "Không nhận diện email vui lòng đăng nhập lại để đảm bảo an toàn"}</p>
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
                <div className="flex flex-row basis-1/4 relative">
                    {
                        !props.isArticle && <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-40 h-16 text-2xl mr-10 ml-auto" onClick={onClickAdd} >Thêm mới</button>
                    }
                    {
                        props.isArticle && 
                            <div>
                                <div className="absolute right-0 flex items-center ">
                                    <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-40 h-16 text-2xl mr-10 ml-auto" onClick={onClickArticleOption} >Tùy chọn</button> 
                                </div>
                                {   
                                    isOptionArticleMenu && 
                                    <div className="flex flex-col bg-white rounded-xl absolute mt-20 mr-16 right-0 border-2 drop-shadow-2xl">
                                        <p className="font-bold text-xl border-b-2 m-4 text-left pb-2 w-64">Tùy chọn</p>
                                        <button className="font-bold text-xl text-left mx-4 my-2" onClick={onClickAdd}>. Thêm mới</button>
                                        <button className="font-bold text-xl text-left mx-4 my-2" onClick={onClickCrawl}>. Crawl data</button>
                                        <button className="font-bold text-xl text-left mx-4 my-2" onClick={onClickHide}>. Ẩn các bài báo cũ</button>
                                    </div>  
                                }   
                            </div>
                    }
                    
               
                </div>
           
            </div>
        </div>
    )
}

export default Header;