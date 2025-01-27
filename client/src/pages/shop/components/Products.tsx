import Winne1 from "../../../assets/images/winne1.webp"
import { Search } from "lucide-react"
import ShoppingIcon from "../../../assets/icons/shoppingbag.svg"
import HeartIcon from "../../../assets/icons/heart.svg"
import { useNavigate } from "react-router-dom"


export const ShopProducts = () => {
    const navigate = useNavigate()

    return (
        <div>
            <section className="mx-auto grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2 mt-[38px] font-sans ">
                <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                    <img
                        src={Winne1}
                        alt="Product"
                        className="object-cover pb-[100px]"
                    />
                    <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                            Alias Secret Red Blend
                        </span>
                        <p className="text-[15px] font-bold text-red-800">$70.00</p>
                    </div>
                    <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col items-center relative font-sans">
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:fill-white hover:inline">
                                <img src={ShoppingIcon} alt="" className="w-[20px] h-[20px]" />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary">
                            <Search className="w-[20px] h-[20px]" onClick={() => navigate("/detail/${id}")} />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <img src={HeartIcon} alt="" className=' w-[20px] h-[20px] lg:block hidden' />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                    <img
                        src={Winne1}
                        alt="Product"
                        className="object-cover pb-[100px]"
                    />
                    <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                            Alias Secret Red Blend
                        </span>
                        <p className="text-[15px] font-bold text-red-800">$70.00</p>
                    </div>
                    <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col items-center relative font-sans">
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:fill-white hover:inline">
                                <img src={ShoppingIcon} alt="" className="w-[20px] h-[20px]" />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary">
                            <Search className="w-[20px] h-[20px]" onClick={() => navigate("/detail/${id}")} />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <img src={HeartIcon} alt="" className=' w-[20px] h-[20px] lg:block hidden' />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                    <img
                        src={Winne1}
                        alt="Product"
                        className="object-cover pb-[100px]"
                    />
                    <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                            Alias Secret Red Blend
                        </span>
                        <p className="text-[15px] font-bold text-red-800">$70.00</p>
                    </div>
                    <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col items-center relative font-sans">
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:fill-white hover:inline">
                                <img src={ShoppingIcon} alt="" className="w-[20px] h-[20px]" />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary">
                            <Search className="w-[20px] h-[20px]" onClick={() => navigate("/detail/${id}")} />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <img src={HeartIcon} alt="" className=' w-[20px] h-[20px] lg:block hidden' />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                    <img
                        src={Winne1}
                        alt="Product"
                        className="object-cover pb-[100px]"
                    />
                    <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                            Alias Secret Red Blend
                        </span>
                        <p className="text-[15px] font-bold text-red-800">$70.00</p>
                    </div>
                    <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col items-center relative font-sans">
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:fill-white hover:inline">
                                <img src={ShoppingIcon} alt="" className="w-[20px] h-[20px]" />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary">
                            <Search className="w-[20px] h-[20px]" onClick={() => navigate("/detail/${id}")} />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <img src={HeartIcon} alt="" className=' w-[20px] h-[20px] lg:block hidden' />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                    <img
                        src={Winne1}
                        alt="Product"
                        className="object-cover pb-[100px]"
                    />
                    <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                        <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                            Alias Secret Red Blend
                        </span>
                        <p className="text-[15px] font-bold text-red-800">$70.00</p>
                    </div>
                    <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                        <div className="flex flex-col items-center relative font-sans">
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:fill-white hover:inline">
                                <img src={ShoppingIcon} alt="" className="w-[20px] h-[20px]" />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary">
                            <Search className="w-[20px] h-[20px]" onClick={() => navigate("/detail/${id}")} />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <img src={HeartIcon} alt="" className=' w-[20px] h-[20px] lg:block hidden' />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
