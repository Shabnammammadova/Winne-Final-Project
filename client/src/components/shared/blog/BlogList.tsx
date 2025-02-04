import { Blog } from "@/types"
import { useNavigate } from "react-router-dom"
import DateFormatter from "../DateFormatter"
import MonthFormatter from "../MonthFormatter"

type Props = {
    blog: Blog[]
}



export const BlogList = ({ blog }: Props) => {
    const navigate = useNavigate()

    return (
        <div className="bg-white pb-[70px]">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">
                    Our Blogs
                </p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-8 lg:gap-y-8 md:gap-x-2 ">
                {blog?.map((bloglist) => (
                    <div className="relative cursor-pointer" key={bloglist._id}
                        onClick={() => navigate(`/blog/detail/${bloglist._id}`)}>
                        <img src={bloglist.images[0]} alt="" className=" opacity-1 z-10 transition-opacity duration-300 hover:opacity-70" />
                        <div className="absolute p-3 w-[68px] h-[68px] bg-white flex flex-col items-center bottom-[80%] left-[6%] font-sans">
                            <DateFormatter date={bloglist.createdAt} />
                            <span className="border w-8 border-black"></span>
                            <MonthFormatter month={bloglist.createdAt} />
                        </div>

                        <div className="flex flex-col items-center justify-center font-sans mt-4">
                            <p className="text-[16px]  leading-6 font-medium uppercase text-gray-400">News</p>
                            <span className="text-[22px] font-medium pb-[10px] text-black capitalize transition-all duration-300 hover:text-primary">{bloglist.name}</span>
                            <span className="h-[2px] w-[50px] bg-primary"></span>
                            <p className="text-base text-center font-normal text-gray-400 pt-[10px] line-clamp-2">
                                {bloglist.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}



BlogList.Skeleton = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <h1 className="w-64 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-48 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-center mx-auto"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-center mx-auto"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-center mx-auto"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                    </div>
                </div>
            </div>
        </section>

    )
}
