export default function TopTitle({title}){
    return(
        <div>
            <h4 className=" text-lg font-bold font-text text-red-500">{title}</h4>
            <hr className="border-gray-400 mb-3 bg-gray-400"/>  
        </div>
    )
}