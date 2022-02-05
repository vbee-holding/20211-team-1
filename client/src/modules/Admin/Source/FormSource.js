import { useEffect, useState } from "react";
import useSourceAPI from "../../../apis/server-api/admin-api/source-api"

const FormSource= (props) => {
    const [source, setSource] = useState({
        name: "",
        logo: "",
        url: "",
    });

    const SourceAPI = useSourceAPI();

    useEffect (() => {
        if(props.purpose === "Update") {
            setSource(props.formOriginalData);
        }
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let curentSource = source;
        let propertyUpdate = {
            [name] : value,
        }
        setSource(Object.assign({}, curentSource, propertyUpdate));
    }

    const onClickClose = () => {
        props.setFormState(false);
    }

    const onSubmit = async () => {
        if(source.url && source.logo && source.name)
        {
            if(props.purpose === "Add") {
                const res = await SourceAPI.postSource(source);
                if(res.status === 200) {
                    alert ("Thêm mới thành công vui lòng đợi vài giây để danh sách cập nhật");
                }
                else if(res.status === 400) {
                    alert (res.data.message);
                }
                else if(res.status === 500) {
                    alert ("Có lỗi máy chủ vui lòng thử lại sau ít phút");
                }
            }
            if(props.purpose === "Update") {
                if(window.confirm('Bạn chắc chắn với thay đổi này chứ')){
                    const res = await SourceAPI.putSource(source._id, source);
                    if(res.status === 200) {
                        alert ("Sửa đổi thành công vui lòng đợi vài giây để danh sách cập nhật");
                    }
                    else if(res.status === 400) {
                        alert (res.data.message);
                    }
                    else if(res.status === 500) {
                        alert ("Có lỗi máy chủ vui lòng thử lại sau ít phút");
                    }
                }
                else return;
            }
            props.setFormOriginalData({});  
            props.setFormState(false);
        }
        else alert ("Cả 3 trường url, name, logo đều không thể để trống"); 

    }

    return (
        <div className="flex items-center justify-center z-10 fixed inset-0 bg-slate-500 bg-opacity-50 ">
            <div className="m-auto mt-40 bg-white w-9/12 shadow-2xl rounded-3xl">
                <div className="flex flex-row justify-between border-b-2 h-16">
                    <div className="flex ml-8">
                        <h1 className="m-auto font-sans text-4xl font-bold">{props.purpose === "Add"? "Thêm mới" : "Sửa đổi thông tin" } nguồn báo</h1>
                    </div>
                    <div className="flex ml-8">
                        <button type="button" className="m-auto mr-5 hover:bg-slate-300 h-10 w-10 rounded-full" onClick={onClickClose}>
                            <span aria-hidden="true" className="text-3xl">&times;</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="m-8 mb-0 flex flex-row space-x-4">
                        <div className="text-lg font-bold mb-1">Đường dẫn URL :</div>
                        <input 
                            type="text" 
                            className="px-4 py-2 w-1/3 rounded-xl border border-gray-400" 
                            onChange={handleInputChange}
                            value={source.url}
                            name="url">
                        </input>
                    </div>
                    <div className="flex flex-row m-4 mt-0">
                        <div className="space-y-4 basis-3/4 m-4">
                            <div className="space-y-4">
                                <label htmlFor="" className="block font-bold mb-1">Logo URL</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={source.logo}
                                    name="logo">
                                </input>
                            </div>
                            <div className="flex flex-row h-48 text-lg mx-10">
                                <img className="my-auto h-full w-full " alt="" src={source.logo}></img>
                            </div>
                        </div>
                        <div className="space-y-4 basis-1/4 m-4 ">
                            <div className="space-y-4">
                                <label htmlFor="" className="block font-bold mb-1">Tên báo</label>
                                <input 
                                    type="text" 
                                    className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                    onChange={handleInputChange}
                                    value={source.name}
                                    name="name">
                                </input>
                            </div>
                            <div className="relative">
                                <button className="absolute right-0 bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-500" onClick={onSubmit}>Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FormSource;
