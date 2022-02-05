import useCategoryAPI from "../../../../apis/server-api/admin-api/category-api"; 
const Item = (props) => {
    
    const CategoryAPI = useCategoryAPI();

    const onClickUpdate = () => {
        props.setFormState(true);
        props.setFormOriginalData(props.item);
        props.setFormPurpose("Update");
    }
    
    const onClickDelete = async () => {
        props.setLoading(true);
        if(window.confirm("Bạn có chắc chắn muốn xóa nguồn báo này")) {
            const res = await CategoryAPI.deleteCategory(props.item._id);
            if(res.status === 200) {
                alert ("Xóa thành công vui lòng đợi vài giây để danh sách cập nhật");
            }
            else if(res.status === 400) {
                alert (res.data.message);
            }
            else if(res.status === 500) {
                alert ("Có lỗi máy chủ vui lòng thử lại sau ít phút");
            }
            props.updateFromChild();
        }
        props.setLoading(false);
    }
   
    return (
        <div className="flex flex-row justify-start border-b-2 h-24">
            <div className="flex flex-col my-auto basis-1/12 mx-12 h-14 overflow-hidden">
                <p className="m-auto text-xl font-bold w-full text-start">{props.index + 1 + "."}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/12 mx-12 h-14 overflow-hidden">
                <p className="my-auto text-lg font-semibold  ">{props.item.name}</p>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-12 h-14 overflow-hidden ">
                <p className="my-auto text-lg font-semibold ">{props.item._id}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/12 mx-12 h-14 overflow-hidden ">
                <p className="my-auto text-lg font-semibold ">{`${props.item.countShowed}/${props.item.count}`}</p>
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