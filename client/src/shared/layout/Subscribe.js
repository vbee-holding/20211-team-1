export default function Subscribe() {
    return (
        <div className="bg-gray-300 mt-8">
            <div className="flex justify-center">
                <h4 className="block text-2xl font-bold mt-10 mb-10">Nhận tin mới nhất</h4>
            </div>
            <div className="flex justify-center">
                <input type="text" className="block w-5/6 h-5 p-7 text-lg" placeholder="Địa chỉ email của bạn" />
            </div>
            <div className="flex justify-center">
                <button className="block font-semibold text-xl p-3 w-5/6 bg-red-700 text-white mb-14 mt-8">Theo dõi</button>
            </div>
        </div>
    )
}