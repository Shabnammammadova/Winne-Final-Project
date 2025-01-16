import Winne1 from "../../../assets/images/winne1.webp"


export const ProductList = () => {
    return (
        <div className="bg-white w-full">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">
                    Best Seller
                </p>
                <span className="border-red-800 border-2 w-[75px]"></span>
                <span className="text-[17px] font-medium pt-5 text-gray-500">
                    Best Seller Product This Week!
                </span>
            </div>
            <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2 mt-[38px] font-sans">
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative">
                    <img src={Winne1}
                        alt="Product" className="object-cover pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
            </section>
        </div>

    )
}
