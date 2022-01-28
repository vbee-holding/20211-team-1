import { useState, useEffect, useRef } from "react";
import useArticleAPI from "../../../apis/server-api/admin-api/article-api"
import useSourceAPI from "../../../apis/server-api/admin-api/source-api"
import useCategoryAPI from "../../../apis/server-api/admin-api/category-api"

const FormArticle = (props) => {

    const [article, setArticle] = useState({
        thumbnail: "",
        link: "",
        title: "",
        releaseTime: "",
        sapo: "",
        isShow: true,
        sourceId: "",
        categoryId: ""
    });
    
    const [sources, setSources] = useState([]);
    const [categories, setCategories] = useState([]);
    const mounted = useRef(false);

    const SourceAPI = useSourceAPI();
    const CategoryAPI = useCategoryAPI();
    const ArticleAPI = useArticleAPI();

    useEffect(()=> {
        mounted.current = true;
        if(props.purpose === "Update") { setArticle(props.formOriginalData); }
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
        const { name, value } = e.target;
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
        if(article.releaseTime) {
            article.releaseTime = Date.parse(article.releaseTime);
        }
        if(article.categoryId && article.sourceId) {
            if(props.purpose === "Add") {
                await ArticleAPI.postArticle(article);
            }
            else if(props.purpose === "Update") {
                if(window.confirm('Bạn chắc chắn với thay đổi này chứ')){
                    await ArticleAPI.putArticle(article._id, article);
                }
                else return;
            }
            props.setFormOriginalData({});  
            props.setFormState(false);
        }
        else alert ("Source và Category không thể để trống"); 

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
                    <div className="flex flex-row justify-between mt-4 h-96">
                        <div className="space-y-4 basis-2/3 px-16">
                            <div className="">
                                <label htmlFor="" className="block font-bold mb-1">Thumbnail URL</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.thumbnail}
                                    name="thumbnail">
                                </input>
                            </div>
                            <div className="">
                                <label htmlFor="" className="block font-bold mb-1">Articel link</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.link}
                                    name="link">
                                </input>
                            </div>
                            <div className="">
                                <label htmlFor="" className="block font-bold mb-1">Title</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.title}
                                    name="title">
                                </input>
                            </div>
                            {/* <div className="">
                                <label htmlFor="" className="block font-bold mb-1">Sapo</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={article.sapo}
                                    name="sapo">
                                </input>
                            </div> */}
                        </div>
                        <div className="space-y-6 basis-1/3 px-16">
                            <div>
                                <label className="block font-bold mb-1">Release Time</label>
                                <input 
                                    type="datetime-local" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    //value={new Date(article.releaseTime)}
                                    name="releaseTime">
                                </input>
                            </div>
                            <div >
                                <label className="block font-bold mb-1 mr-10" >Status</label>
                                <select 
                                    className="w-full" 
                                    onChange={handleInputChange} 
                                    name="isShow"
                                    value={article.status}>
                                        <option value={true} >Ẩn</option>
                                        <option value={false} >Hiện</option>
                                </select>
                            </div>

                            <div className="">
                                <label className="block font-bold mb-1 mr-10" >Category Id</label>
                                <select 
                                    className="w-full" 
                                    onChange={handleInputChange} 
                                    name="categoryId"
                                    value={article.categoryId}>
                                    {
                                        categories.map((category, index) => {
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
                                    name="sourceId"
                                    value={article.sourceId}>
                                    {
                                        sources.map((source, index) => {
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
