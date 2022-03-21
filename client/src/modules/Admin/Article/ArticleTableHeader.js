const ArticleTableHeader = (props) => {
    console.log(props.numsPage);
    console.log(props.page);
    return (
        
        <div className="flex flex-row border-b-2 rounded-t-3xl bg-white m-8 my-0">
            <div className="font-bold text-xl m-10 mb-6 mx-7 w-24" >STT</div>
            <div className="font-bold text-xl m-10 mb-6 mx-7 basis-1/12" >Nguồn</div>
            <div className="font-bold text-xl m-10 mb-6 mx-7 basis-2/12" >Link</div>
            <div className="font-bold text-xl m-10 mb-6 mx-7 basis-3/12" >Title</div>
            <div className="font-bold text-xl m-10 mb-6 mx-4 basis-2/12" >Thời gian</div>
            <div className="font-bold text-xl m-10 mb-6 mx-7 basis-1/12" >Status</div>
            <div className="font-bold text-xl m-10 mb-6 mx-7 basis-2/12" >Page {props.page + 1}/{props.numsPage}</div>
        </div>
    )
}
export default ArticleTableHeader;