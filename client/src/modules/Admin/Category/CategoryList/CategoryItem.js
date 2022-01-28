const Item = (props) => {
    return (
        <div className="flex flex-row justify-start border-b-2 h-24">
            <div className="flex flex-col my-auto basis-1/5 mx-12 h-14 overflow-hidden">
                <p className="my-auto text-lg font-semibold  ">{props.item.name}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/5 mx-12 h-14 overflow-hidden ">
                <p className="my-auto text-lg font-semibold ">{props.item._id}</p>
            </div>
            <div className="flex flex-col my-auto basis-2/5 mx-12 h-14 overflow-hidden ">
                <p className="my-auto text-lg font-semibold ">20000</p>
            </div>
        </div>
    )
}
export default Item;