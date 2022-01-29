import { useEffect, useState } from "react";
import useCategoryAPI from "../../../apis/server-api/admin-api/category-api"

const FormCategory= (props) => {
    const [category, setCategory] = useState({
        name: "",
    });

    const CategoryAPI = useCategoryAPI();

    useEffect (() => {
        if(props.purpose === "Update") {
            setCategory(props.formOriginalData);
        }
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let curentCategory = category;
        let propertyUpdate = {
            [name] : value,
        }
        setCategory(Object.assign({}, curentCategory, propertyUpdate));
    }

    const onClickClose = () => {
        props.setFormState(false);
    }

    const onSubmit = async () => {
        if(category.name)
        {
            if(props.purpose === "Add") {
                const res = await CategoryAPI.postCategory(category);
                if(res.success) {
                    alert("Sửa đổi thành công"); 
                }
                else alert("Có lỗi xảy ra hãy thử lại");
            }
            if(props.purpose === "Update") {
                if(window.confirm('Bạn chắc chắn với thay đổi này chứ')){
                    const res = await CategoryAPI.putCategory(category._id, category);
                    if(res.success) {
                        alert("Sửa đổi thành công"); 
                    }
                    else alert("Có lỗi xảy ra hãy thử lại");
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
                        <h1 className="m-auto font-sans text-4xl font-bold">{props.purpose === "Add"? "Thêm mới" : "Sửa đổi thông tin" } chuyên mục</h1>
                    </div>
                    <div className="flex ml-8">
                        <button type="button" className="m-auto mr-5 hover:bg-slate-300 h-10 w-10 rounded-full" onClick={onClickClose}>
                            <span aria-hidden="true" className="text-3xl">&times;</span>
                        </button>
                    </div>
                </div>
                <div className="m-4">
                    <div className="m-8 mb-4 mt-4 flex flex-col">
                        <div className="block text-lg font-bold mb-1">Tên chuyên mục:</div>
                        <div className="flex flex-row">
                            <input 
                                type="text" 
                                className="px-4 py-2 w-full rounded-xl border border-gray-400" 
                                onChange={handleInputChange}
                                value={category.name}
                                name="name">
                            </input>
                            <div className="mx-4">
                                <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-500" onClick={onSubmit}>Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FormCategory;
