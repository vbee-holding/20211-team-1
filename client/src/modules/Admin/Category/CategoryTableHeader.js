const CategoryTableHeader = (props) => {
    return (
        
        <div className="flex flex-row border-b-2 rounded-t-3xl bg-white m-8 my-0 justify-start">
            <div className="font-bold text-xl text-start m-12 mb-6 basis-1/5" >Tên chuyên mục</div>
            <div className="font-bold text-xl text-start m-12 mb-6 basis-2/5" >Id</div>
            <div className="font-bold text-xl text-start m-12 mb-6 basis-2/5" >Số lượng bài báo</div>
            
        </div>
    )
}
export default CategoryTableHeader;