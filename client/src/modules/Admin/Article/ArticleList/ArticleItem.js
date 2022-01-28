import { useEffect, useRef, useState } from "react";
import ArticleAPI from "../../../../apis/ArticleAPI"

const Item = (props) => {

    const mounted = useRef(false);
 
    useEffect(() => {
        mounted.current = true;
        return () => {mounted.current = false; }
    }, [props])

    const onClickChangeVisible = async () => {
        const updatedField = props.item;
        if(props.item.status==='Hiện') updatedField.status = 'Ẩn';
        else updatedField.status = 'Hiện';
        await ArticleAPI.putArticle(updatedField._id, updatedField);
        if(mounted.current) props.updateFromChild();
    } 

    const onClickUpdate = () => {
        props.setFormPurpose("Update");
        props.setFormOriginalData(props.item);
        props.setFormState(true);
        props.updateFromChild();
    }

    const onClickDelete = async () => {
        if(window.confirm("Bạn có chắc chắn muốn xóa bài báo này")) {
            await ArticleAPI.deleteArticle(props.item._id);
            props.updateFromChild();
        }
    }
    return (
        <div className="flex flex-row border-b-2 h-24 relative" key={props.index}>
            <div className="flex flex-col my-auto basis-1/12 mx-10 h-24 overflow-hidden">
                <img className="m-auto text-lg font-medium w-full h-8" src={props.source.logo} alt=""></img>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-10 h-14 overflow-hidden">
                <a className="m-auto text-lg font-medium w-full h-full " href={props.item.link}>{props.item.link}</a>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-10 h-14 overflow-hidden">
                <p className="m-auto text-lg font-medium w-full h-full ">{props.item.title}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/12 mx-10 h-14 overflow-hidden">
                <p className="my-auto text-lg font-medium " >{((new Date(props.item.releaseTime)).toLocaleString()).split(',')[1]}</p>
                <p className="my-auto text-lg font-medium " >{((new Date(props.item.releaseTime)).toLocaleString()).split(',')[0]}</p>
            </div>
            <div className="my-auto basis-1/12 mx-10 ">
                {
                    (props.item.status==='Hiện')? <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-600" onClick={onClickChangeVisible}>Hiển thị</button>:
                    <button className="bg-red-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-red-600" onClick={onClickChangeVisible}>Ẩn</button>
                }
            </div>
            <div className="my-auto basis-1/12 mx-10 ">
                <button className="bg-indigo-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-indigo-600" onClick={onClickUpdate}>Sửa đổi</button>
            </div>
            <div className="my-auto basis-1/12 mx-10 ">
                <button className="bg-red-500 rounded-2xl font-semibold text-white w-20 h-10 text-sm hover:bg-red-600" onClick={onClickDelete}>Xóa</button>
            </div>
            
        </div>
    )
}
export default Item;