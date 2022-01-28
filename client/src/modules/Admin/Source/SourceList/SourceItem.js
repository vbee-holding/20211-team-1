const Item = (props) => {
    const onClickUpdate = () => {
        props.setFormState(true);
        props.setFormOriginalData(props.item);
    }

    return (
        <div className="flex flex-row justify-start border-b-2 h-24">
            <div className="flex flex-row h-24 text-lg basis-2/12 mx-10">
                <img className="my-auto h-8" alt="" src={props.item.logo}></img>
            </div>
            <div className="flex flex-col my-auto basis-2/12 mx-10 h-14 overflow-hidden">
                <p className="my-auto text-lg font-medium">{props.item.name}</p>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-10 h-14 overflow-hidden">
                <a className="my-auto text-lg font-medium" href={props.item.url}>{props.item.url}</a>
            </div>
            <div className="flex flex-col my-auto basis-3/12 mx-10 h-14 overflow-hidden">
                <p className="my-auto text-lg font-medium">{props.item._id}</p>
            </div>
            <div className="my-auto basis-2/12 mx-10 text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 rounded-2xl font-semibold text-white w-20 h-10 text-sm inline-block" onClick={onClickUpdate}>Sửa đổi</button>
            </div>
        </div>
    )
}
export default Item;