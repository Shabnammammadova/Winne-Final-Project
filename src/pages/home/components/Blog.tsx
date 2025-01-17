import Blog1 from "../../../assets/images/blog1.webp"
import Blog2 from "../../../assets/images/blog2.webp"
import Blog3 from "../../../assets/images/blog3.webp"


export const HomeBlog = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">
                    Our Blogs
                </p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-8 md:gap-x-2 ">
                <div className="relative">
                    <img src={Blog1} alt="" className=" opacity-1 z-10 transition-opacity duration-300 hover:opacity-70" />
                    <div className="absolute p-3 w-[68px] h-[68px] bg-white flex flex-col items-center bottom-[80%] left-[16%] font-sans">
                        <p className="text-sm font-medium font-sans">30</p>
                        <span className="border w-8 border-black"></span>
                        <p className="text-[14px] font-sans">May</p>
                    </div>

                    <div className="flex flex-col items-center justify-center font-sans mt-4">
                        <p className="text-[16px]  leading-6 font-medium uppercase text-gray-400">News</p>
                        <span className="text-[22px] font-medium pb-[10px] text-black capitalize">How to make handmade wine</span>
                        <span className="h-[2px] w-[50px] bg-primary"></span>
                        <p className="text-base text-center font-normal text-gray-400 pt-[10px]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at...
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img src={Blog2} alt="" className=" opacity-1 z-10 transition-opacity duration-300 hover:opacity-70" />
                    <div className="absolute p-3 w-[68px] h-[68px] bg-white flex flex-col items-center bottom-[80%] left-[16%] font-sans">
                        <p className="text-sm font-medium font-sans">30</p>
                        <span className="border w-8 border-black"></span>
                        <p className="text-[14px] font-sans">May</p>
                    </div>

                    <div className="flex flex-col items-center justify-center font-sans mt-4">
                        <p className="text-[16px]  leading-6 font-medium uppercase text-gray-400">News</p>
                        <span className="text-[22px] font-medium pb-[10px] text-black capitalize">Popular types of wine today</span>
                        <span className="h-[2px] w-[50px] bg-primary"></span>
                        <p className="text-base text-center font-normal text-gray-400 pt-[10px]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at...
                        </p>
                    </div>
                </div>
                <div className="relative">
                    <img src={Blog3} alt="" className=" opacity-1 z-10 transition-opacity duration-300 hover:opacity-70" />
                    <div className="absolute p-3 w-[68px] h-[68px] bg-white flex flex-col items-center bottom-[80%] left-[16%] font-sans">
                        <p className="text-sm font-medium font-sans">30</p>
                        <span className="border w-8 border-black"></span>
                        <p className="text-[14px] font-sans">May</p>
                    </div>

                    <div className="flex flex-col items-center justify-center font-sans mt-4">
                        <p className="text-[16px]  leading-6 font-medium uppercase text-gray-400">News</p>
                        <span className="text-[22px] font-medium pb-[10px] text-black capitalize">The art of making wine</span>
                        <span className="h-[2px] w-[50px] bg-primary"></span>
                        <p className="text-base text-center font-normal text-gray-400 pt-[10px]">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
