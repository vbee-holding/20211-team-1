const ArticleTableHeader = (props) => {
    return (
        
        <div className="flex flex-row border-b-2 rounded-t-3xl bg-white m-8 my-0">
            <div className="font-bold text-xl m-10 mb-6 basis-1/12" >Nguồn</div>
            <div className="font-bold text-xl m-10 mb-6 basis-3/12" >Link</div>
            <div className="font-bold text-xl m-10 mb-6 basis-3/12" >Title</div>
            <div className="font-bold text-xl m-10 mb-6 basis-2/12" >Thời gian</div>
            <div className="font-bold text-xl m-10 mb-6 basis-1/12" >Status</div>
            <div className="font-bold text-xl m-10 mb-6 basis-1/12" ></div>
            <div className="font-bold text-xl m-10 mb-6 basis-1/12" ></div>
        </div>
    )
}
export default ArticleTableHeader;