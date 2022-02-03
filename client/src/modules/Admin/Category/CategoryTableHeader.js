const CategoryTableHeader = (props) => {
    return (
        
        <div className="flex flex-row border-b-2 rounded-t-3xl bg-white m-8 my-0 justify-start">
            <div className="font-bold text-xl text-start m-10 mb-6 basis-1/12" >STT</div>
            <div className="font-bold text-xl text-start m-10 mb-6 basis-2/12" >Tên chuyên mục</div>
            <div className="font-bold text-xl text-start m-10 mb-6 basis-3/12" >Id</div>
            <div className="font-bold text-xl text-start m-10 mb-6 basis-2/12" >Số lượng bài báo</div>
            <div className="font-bold text-xl text-start m-10 mb-6 basis-1/12" ></div>
            <div className="font-bold text-xl text-start m-10 mb-6 basis-1/12" ></div>
            
        </div>
    )
}
export default CategoryTableHeader;