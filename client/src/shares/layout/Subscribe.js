export default function Subscribe(){
    return(
        <div className="bg-gray-300 mt-10">
            <div className="flex justify-center">
            <h4 className="block text-3xl font-bold mt-12 mb-12">Nhận tin mới nhất</h4>
            </div>
            <div className="flex justify-center">
            <input type="text" className="block w-5/6 h-5 p-9 text-lg"  placeholder="Địa chỉ email của bạn"/>
            </div>
            <div className="flex justify-center">
            <button className="block font-semibold text-2xl p-5 w-5/6 bg-red-700 text-white mb-14 mt-5">Theo dõi</button>
            </div>
        </div>
    )
}