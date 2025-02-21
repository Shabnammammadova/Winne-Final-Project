import { Blog } from "@/types";
import { useNavigate } from "react-router-dom";
import DateFormatter from "../DateFormatter";
import MonthFormatter from "../MonthFormatter";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



type Props = {
    blog: Blog[];
};

export const BlogList = ({ blog }: Props) => {
    const navigate = useNavigate();
    const [visibleBlogs, setVisibleBlogs] = useState<Blog[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const { t } = useTranslation()
    useEffect(() => {
        if (blog && blog.length > 0) {
            setVisibleBlogs(blog.slice(0, 3));
            setHasMore(blog.length > 3);
        }
    }, [blog]);

    const loadMoreBlogs = () => {
        const newVisibleBlogs = blog.slice(0, visibleBlogs.length + 3);
        setVisibleBlogs(newVisibleBlogs);
        if (newVisibleBlogs.length >= blog.length) {
            setHasMore(false);
        }
    };
    return (
        <div className="bg-white dark:bg-black pb-[70px]">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">{t("our blogs")}</p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <div className="container pt-[50px] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-8 lg:gap-y-8 md:gap-x-2">
                {visibleBlogs.map((bloglist) => (
                    <div
                        className="relative cursor-pointer"
                        key={bloglist._id}
                        onClick={() => navigate(`/blog/detail/${bloglist._id}`)}
                    >
                        <img
                            src={bloglist.images[0]}
                            alt=""
                            className="opacity-1 z-10 transition-opacity duration-300 hover:opacity-70"
                        />
                        <div className="absolute p-3 w-[68px] h-[68px] bg-white flex flex-col items-center bottom-[80%] left-[6%] font-sans dark:text-black">
                            <DateFormatter date={bloglist.createdAt} />
                            <span className="border w-8 border-black"></span>
                            <MonthFormatter month={bloglist.createdAt} />
                        </div>
                        <div className="flex flex-col items-center justify-center font-sans mt-4">
                            <p className="text-[16px] leading-6 font-medium uppercase text-gray-400">{t("news")}</p>
                            <span className="text-[22px] font-medium pb-[10px] text-black capitalize transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                                {t(`blog.${bloglist.name.replace(/\s+/g, "_").toLowerCase()}`)}
                            </span>
                            <span className="h-[2px] w-[50px] bg-primary"></span>
                            <p className="text-base text-center font-normal text-gray-400 pt-[10px] line-clamp-2">
                                {bloglist.description}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
            {hasMore && (
                <button
                    onClick={loadMoreBlogs}
                    className="text-white text-center font-sans flex items-center justify-center mx-auto p-2 rel relative top-5 bg-primary rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                    {t("view more")}
                </button>
            )}
        </div>
    );
};


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
