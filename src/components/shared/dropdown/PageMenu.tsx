

export const PageMenu = () => {
    return (
        <div className="absolute left-0 top-10 w-[600px] transform -translate-x-1/2 bg-white shadow-lg p-6 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 z-10">
            <div className="grid grid-cols-3 gap-4 cursor-pointer">
                <div>
                    <p className="text-lg font-semibold uppercase hover:text-red-800 mb-[5px]">Pre-built Pages</p>
                    <div className="border-b-[1px] border-red-900 w-[70px]"></div>
                    <ul className="space-y-2 mt-2">
                        <li className="text-gray-500 text-[15px] hover:text-red-800">About Us</li>
                        <li className="text-gray-500 text-[15px] hover:text-red-800">Contact Us</li>
                        <li className="text-gray-500 text-[15px] hover:text-red-800">FAQs</li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold uppercase hover:text-red-800 mb-[5px]">Ecommerce</p>
                    <div className="border-b-[1px] border-red-900 w-[70px]"></div>
                    <ul className="space-y-2 mt-2">
                        <li className="text-gray-500 text-[15px] hover:text-red-800">My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
