import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { Product } from "@/types"





type Props = {
    product: Product[]
}


export const WineProductList = ({ product }: Props) => {
    const navigate = useNavigate()


    return (
        <div className="bg-white dark:bg-black dark:text-white w-full">
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
                {product?.map((wineproduct) => (
                    <div key={wineproduct._id} className="cursor-pointer relative group">
                        <img
                            src={wineproduct.images[0]}
                            alt="Product"
                            className="object-cover pb-[100px]"
                            onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                        />
                        <div className="px-4 py-3 bg-white dark:bg-black text-center h-[100px] absolute left-0 bottom-0 w-full">
                            <span className="xs:text-[14px] text-black dark:text-white capitalize xl:text-base font-medium pt-5 pb-[10px]">
                                {wineproduct.name}
                            </span>
                            <p className="text-[15px] font-bold text-red-800">
                                ${wineproduct.price}
                            </p>
                        </div>

                        <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col items-center relative font-sans">
                                <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                    <SlBag className="w-[20px] h-[20px] dark:text-black" />
                                </li>
                            </div>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                <IoSearchOutline
                                    className="w-[20px] h-[20px] dark:text-black"
                                    onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                                />
                            </li>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                <CiHeart className="w-[20px] h-[20px] dark:text-black" />
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    )
}



WineProductList.Skeleton = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                </div>
            </div>
        </section>

    )
}
