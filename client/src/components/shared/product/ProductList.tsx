import Winne1 from "../../../assets/images/winne1.webp"
import { Heart, Search } from "lucide-react"
import { ShoppingBag } from 'lucide-react';


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
                <div className="cursor-pointer relative group">
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
                            <p className="text-center mx-auto border-black bg-black text-white rounded text-[14px] absolute h-[25px] w-[80px] bottom-[100%] hidden group-hover:hidden">
                                Add to Cart
                            </p>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                <ShoppingBag />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Search />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Heart />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group">
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
                            <p className="text-center mx-auto border-black bg-black text-white rounded text-[14px] absolute h-[25px] w-[80px] bottom-[100%] hidden group-hover:hidden">
                                Add to Cart
                            </p>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                <ShoppingBag />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Search />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Heart />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group">
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
                            <p className="text-center mx-auto border-black bg-black text-white rounded text-[14px] absolute h-[25px] w-[80px] bottom-[100%] hidden group-hover:hidden">
                                Add to Cart
                            </p>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                <ShoppingBag />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Search />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Heart />
                        </li>
                    </ul>
                </div>
                <div className="cursor-pointer relative group">
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
                            <p className="text-center mx-auto border-black bg-black text-white rounded text-[14px] absolute h-[25px] w-[80px] bottom-[100%] hidden group-hover:hidden">
                                Add to Cart
                            </p>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                <ShoppingBag />
                            </li>
                        </div>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Search />
                        </li>
                        <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                            <Heart />
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
