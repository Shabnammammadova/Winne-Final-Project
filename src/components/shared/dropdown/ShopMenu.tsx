
export const ShopMenu = () => {
    return (
        <div className="absolute w-[600px] left-[150%] right-1/4 top-10 -translate-x-1/2 bg-white shadow-slate-300 z-20  p-[30px] transition-all ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] duration-700 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100">
            <div className="flex items-center justify-between relative">
                <div className="flex flex-col items-start group relative">
                    <p className="relative text-base text-black uppercase mt-[15px] mb-[5px] font-semibold font-sans hover:text-red-800 transition-all ease-in">Shop heading</p>
                    <span className="absolute bottom-[45%] left-0 w-[70px] border-t-[1px] border-red-800"></span>
                    <ul className="flex flex-col items-center no-underline mt-[15px]">
                        <li className="text-[15px] text-gray-600 leading-7 font-medium font-sans hover:text-red-800 transition-all ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] ">Heading</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start group relative">
                    <p className="relative text-base text-black uppercase mt-[15px] mb-[5px] font-semibold font-sans hover:text-red-800 transition-all ease-in">Filter layout</p>
                    <span className="absolute bottom-[45%] left-0 w-[70px] border-t-[1px] border-red-800"></span>
                    <ul className="flex flex-col items-center no-underline mt-[15px]">
                        <li className="text-[15px] text-gray-600 leading-7 font-medium font-sans hover:text-red-800 transition-all ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] ">Filter</li>
                    </ul>
                </div>
                <div className="flex flex-col items-start group relative">
                    <p className="relative text-base text-black uppercase mt-[15px] mb-[5px] font-semibold font-sans hover:text-red-800 transition-all ease-in">Product layouts</p>
                    <span className="absolute bottom-[45%] left-0 w-[70px] border-t-[1px] border-red-800"></span>
                    <ul className="flex flex-col items-center no-underline mt-[15px]">
                        <li className="text-[15px] text-gray-600 leading-7 font-medium font-sans hover:text-red-800 transition-all ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] ">Product</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


