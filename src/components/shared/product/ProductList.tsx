import Winne1 from "../../../assets/images/winne1.webp"

// export const ProductList = () => {
//     return (
//         <div className="container mt-[38px]">
//             <div className="grid grid-cols-1">
//                 <div className="relative mb-[30px]">
//                     <img src={Winne1} alt="" className="w-full object-cover" />
//                 </div>
//             </div>
//         </div>
//     )
// }


export const ProductList = () => {
    return (
        <div className="bg-white w-full">
            <section className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center items-center gap-y-20 gap-x-14 mt-[38px] font-sans">
                <div className="cursor-pointer relative ">
                    <img src={Winne1}
                        alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="text-black capitalize text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative ">
                    <img src={Winne1}
                        alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="text-black capitalize text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative ">
                    <img src={Winne1}
                        alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="text-black capitalize text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>
                <div className="cursor-pointer relative ">
                    <img src={Winne1}
                        alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                    <div className="px-4 py-3  bg-white text-center h-[100px]  absolute left-0 bottom-0 w-full">
                        <span className="text-black capitalize text-base font-medium pt-5 pb-[10px]">Alies Secret Red Blend</span>
                        <p className="text-[15px] font-bold  text-red-800">$70.00</p>
                    </div>
                </div>

            </section>
        </div>

    )
}
