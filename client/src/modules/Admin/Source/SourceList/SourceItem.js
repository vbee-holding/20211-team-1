import useSourceAPI from "../../../../apis/server-api/admin-api/source-api";

const Item = (props) => {

    const SourceAPI = useSourceAPI();

    const onClickUpdate = () => {
        props.setFormState(true);
        props.setFormOriginalData(props.item);
        props.setFormPurpose("Update");
    }
    
    const onClickDelete = async () => {
        props.setLoading(true);
        if(window.confirm("Bạn có chắc chắn muốn xóa nguồn báo này")) {
            const res = await SourceAPI.deleteSource(props.item._id);
            if(res.success) {
                alert("Xóa nguồn báo thành công"); 
            }
            else alert("Có lỗi xảy ra hãy thử lại");
            props.updateFromChild();
        }
        props.setLoading(false);
    }
    return (
        <div className="flex flex-row justify-start border-b-2 h-24">
            <div className="flex flex-col my-auto basis-1/12 mx-10 h-14 overflow-hidden">
                <p className="m-auto text-xl font-bold w-full text-start">{props.index + 1 + "."}</p>
            </div>
            <div className="flex flex-row h-24 text-lg basis-2/12 mx-10">
                <img className="my-auto h-8" alt="" src={props.item.logo}></img>
            </div>
            <div className="flex flex-col my-auto basis-2/12 ml-10 mr-0 h-14 overflow-hidden">
                <p className="my-auto text-lg font-medium">{props.item.name}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/12 mx-10 h-14 overflow-hidden">
                <a className="my-auto text-lg font-medium" href={props.item.url}>{props.item.url}</a>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-10 h-14 overflow-hidden">
                <p className="my-auto text-lg font-medium">{props.item._id}</p>
            </div>
            <div className="my-auto basis-1/12 mx-10 text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm inline-block" onClick={onClickUpdate}>Sửa đổi</button>
            </div>
            <div className="my-auto basis-1/12 mx-10 text-center">
                <button className="bg-red-500 hover:bg-red-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm inline-block" onClick={onClickDelete}>Xóa</button>
            </div>
        </div>
    )
}
export default Item;