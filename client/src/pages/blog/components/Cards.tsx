import DateFormatter from "@/components/shared/DateFormatter";
import MonthFormatter from "@/components/shared/MonthFormatter";
import { Blog } from "@/types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


type Props = {
    blog: Blog[]
}

export const BlogCards = ({ blog }: Props) => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div className="bg-white dark:bg-black  pb-[70px] border-b  border-gray-200">
            <div className="flex justify-center items-center flex-col font-sans">
                <p className="text-2xl font-medium mt-5 pb-2 tracking-[1px] uppercase dark:text-white">{t("news")}</p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-10 lg:gap-x-8 md:gap-x-2">
                {blog?.map((bloglist) => (
                    <div key={bloglist._id} className="relative" onClick={() => { navigate(`/blog/detail/${bloglist._id}`) }}
                    >
                        <img
                            src={bloglist.images[0]}
                            alt="blog"
                            className="w-full min-h-[446px] object-cover opacity-1 z-10 transition-opacity duration-300 cursor-pointer hover:brightness-75"
                        />
                        <div className="absolute p-3 w-[76px] h-[76px] bg-white flex flex-col items-center rounded-full bottom-[85%] left-[2%] font-sans">
                            <DateFormatter date={bloglist.createdAt} />
                            <span className="border w-12 h-[1px] border-red-700"></span>
                            <MonthFormatter month={bloglist.createdAt} />

                        </div>
                        <div className="flex flex-col items-start justify-center font-sans mt-4">
                            <span className="text-[22px] dark:text-white hover:dark:text-red-800 font-medium pb-[10px] text-black capitalize cursor-pointer hover:text-red-800">{t(`blog.${bloglist.name.replace(/\s+/g, "_").toLowerCase()}`)}</span>
                            <span className="h-[1px] w-[120px] bg-gray-400"></span>
                            <p className="text-sm text-start font-normal text-gray-400 pt-[10px] line-clamp-3 ">{t("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose")}</p>
                            <button className="text-sm mt-[23px] mb-4 font-medium border-b border-black text-black  capitalize hover:text-red-800 hover:border-red-800  dark:text-white hover:dark:text-red-800 dark:border-white hover:dark:border-red-800">
                                {t("read more")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



BlogCards.Skeleton = function () {
    return (
        <section className="bg-white dark:bg-gray-900 border-b border-gray-200">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <h1 className="w-64 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-48 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 ">
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-[456px] h-[304px] bg-gray-300 rounded-lg dark:bg-gray-600 text-left"></div>
                        <h1 className="w-20 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                        <p className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></p>
                        <h1 className="w-full  h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-left"></h1>
                    </div>
                </div>
            </div>
        </section>

    )
}
