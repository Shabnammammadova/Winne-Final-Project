import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { Product } from "@/types"

type Props = {
    product: Product[]
}

export const ShopProducts = ({ product }: Props) => {
    const navigate = useNavigate()

    return (
        <div>
            <section className="mx-auto grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2 mt-[38px] font-sans ">
                {product?.map((wineproduct) => (
                    <div className="cursor-pointer relative group" onClick={() => navigate("/detail/${id}")}>
                        <img
                            src={wineproduct.images[0]}
                            alt="Product"
                            className="object-cover pb-[100px]"
                        />
                        <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                            <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                                {wineproduct.name}
                            </span>
                            <p className="text-[15px] font-bold text-red-800">${wineproduct.price}</p>
                        </div>
                        <ul className="absolute flex gap-1 justify-center items-center bottom-[35%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col items-center relative font-sans">
                                <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                    <SlBag className="w-[16px] h-[16px]" />
                                </li>
                            </div>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                <IoSearchOutline className="w-[16px] h-[16px]" onClick={() => navigate("/detail/${id}")} />
                            </li>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                <CiHeart className=' w-[16px] h-[16px]' />
                            </li>
                        </ul>
                    </div>
                ))}

            </section>
        </div>
    )
}
