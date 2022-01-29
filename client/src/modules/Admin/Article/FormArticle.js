import { useState, useEffect, useRef } from "react";
import useArticleAPI from "../../../apis/server-api/admin-api/article-api"
import useSourceAPI from "../../../apis/server-api/admin-api/source-api"
import useCategoryAPI from "../../../apis/server-api/admin-api/category-api"

const FormArticle = (props) => {

    const [article, setArticle] = useState({
        thumbnail: "",
        link: "",
        title: "",
        releaseTime: 0,
        sapo: "",
        isShow: true,
        source: "",
        category: ""
    });
    const [releaseTime, setReleaseTime] = useState();
    
    const [sources, setSources] = useState([]);
    const [categories, setCategories] = useState([]);
    const mounted = useRef(false);

    const SourceAPI = useSourceAPI();
    const CategoryAPI = useCategoryAPI();
    const ArticleAPI = useArticleAPI();

    useEffect(()=> {
        mounted.current = true;
        if(props.purpose === "Update") { 
            setArticle(props.formOriginalData);
            setReleaseTime(props.formOriginalData.releaseTime);
        }
        loadData();
        return () => {
            mounted.current = false;
        };
    },[])

    const loadData = async () => {
        const categoriesRes = await CategoryAPI.getCategories();
        const sourcesRes = await SourceAPI.getSources();
        if(mounted.current) {
            setCategories(categoriesRes.data);
            setSources(sourcesRes.data);
        }
    }  

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let curentArticle = article;
        let propertyUpdate = {
            [name] : value,
        }
        setArticle(Object.assign({}, curentArticle, propertyUpdate));
    }

    const onClickClose = () => {
        props.setFormState(false);
    }

    const onSubmit = async () => {
        if(article.releaseTime !== releaseTime) {
            article.releaseTime = Date.parse(article.releaseTime);
        }
        else article.releaseTime = releaseTime;

        if(article.category && article.source && article.thumbnail && article.link && article.title) {
            if(props.purpose === "Add") {
                const res = await ArticleAPI.postArticle(article);
                if(res.success) {
                    alert("Thêm thành công"); 
                }
                else {
                    alert((res.message ? res.message : "Có lỗi xảy ra") + " vui lòng thử lại");
                    return;
                }
            }
            else if(props.purpose === "Update") {
                if(window.confirm('Bạn chắc chắn với thay đổi này chứ')){
                    const res = await ArticleAPI.putArticle(article._id, article);
                    if(res.success) {
                        alert("Sửa đổi thành công"); 
                    }
                    else {
                        alert((res.message ? res.message : "Có lỗi xảy ra") + " vui lòng thử lại");
                        return;
                    }
                }
                else return;
            }
            props.setFormOriginalData({});  
            props.setFormState(false);
        }
        else alert ("Thumbnail, Title, Link, Source và Category không thể để trống"); 

    }

    return (
        <div className="flex items-center justify-center z-10 fixed inset-0 bg-slate-500 bg-opacity-50 ">
            <div className="m-auto mt-40 bg-white w-9/12 shadow-2xl rounded-3xl">
                    <div className="flex flex-row justify-between border-b-2 h-16">
                        <div className="flex ml-8">
                            <h1 className="m-auto font-sans text-4xl font-bold">{(props.purpose === "Add") ? "Thêm mới" : "Sửa đổi"} bài báo </h1>
                        </div>
                        <div className="flex ml-8">
                            <button type="button" className="m-auto mr-5 hover:bg-slate-300 h-10 w-10 rounded-full" onClick={onClickClose}>
                                <span aria-hidden="true" className="text-3xl">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div className= {props.purpose === "Add" ? "flex flex-row justify-between mt-4 h-96" : "flex flex-row justify-between mt-4 h-80"} >
                        <div className="space-y-6 basis-2/3 px-16">
                            <div >
                                <label htmlFor="" className="block font-bold mb-1">Thumbnail URL</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.thumbnail}
                                    name="thumbnail">
                                </input>
                            </div>
                            <div >
                                <label htmlFor="" className="block font-bold mb-1">Articel link</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.link}
                                    name="link">
                                </input>
                            </div>
                            <div >
                                <label htmlFor="" className="block font-bold mb-1">Title</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.title}
                                    name="title">
                                </input>
                            </div>
                        </div>
                        <div className="space-y-4 basis-1/3 px-16">
                            <div>
                                <label className="block font-bold mb-1">Release Time</label>
                                <input 
                                    type="datetime-local" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.releaseTime}
                                    name="releaseTime">
                                </input>
                            </div>
                            {
                                props.purpose === "Add" && 
                                    <div >
                                        <label className="block font-bold mb-1 mr-10" >Status</label>
                                        <select 
                                            className="w-full" 
                                            onChange={handleInputChange} 
                                            name="isShow"
                                            value ={article.isShow}>
                                                <option value={true} >Hiện</option>
                                                <option value={false} >Ẩn</option>
                                        </select>
                                    </div>
                            }

                            <div >
                                <label className="block font-bold mb-1 mr-10" >Category Id</label>
                                <select 
                                    className="w-full" 
                                    onChange={handleInputChange} 
                                    name="category"
                                    value={article.category}>
                                        <option selected hidden>Choose here</option>
                                        {
                                            categories && categories.map((category, index) => {
                                                return (
                                                    <option value={category._id} key={index}>{category.name}</option>
                                                )
                                            })
                                        }
                                </select>
                            </div>

                            <div>
                                <label className="block font-bold mb-1 mr-10">Source Id </label>
                                <select 
                                    className="w-full" 
                                    onChange={handleInputChange} 
                                    name="source"
                                    value={article.source}>
                                        <option selected hidden>Choose here</option>
                                        {
                                            sources && sources.map((source, index) => {
                                                return (
                                                    <option value={source._id} key={index} >{source.name}</option>
                                                )
                                            })
                                        }
                                </select>
                            </div>
                            <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-500" onClick={onSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
        </div>   
    )
}

export default FormArticle;
