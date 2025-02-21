import { useParams } from "react-router-dom";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Spinner } from "@/components/shared/Spinner";
import { QUERY_KEYS } from "@/constants/query-keys";
import blogService from "@/services/blog";
import { useQuery } from "@tanstack/react-query";
import { WineBrand } from "./WineBrand";
import { NotFound } from "@/pages/not-found";
import { useTranslation } from "react-i18next";


export const BlogDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation()
    const { data: blogDetail, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.BLOG_DETAIL, id],
        queryFn: () => blogService.getById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center mt-28">
                <Spinner />
            </div>
        );
    }
    if (isError) {
        return (
            <NotFound />
        )
    }
    const { name, description, images } = blogDetail?.data?.item || { name: "", description: "", images: [] };

    return (
        <div className="bg-white dark:bg-black font-sans pt-5 border-b border-b-gray-200">
            <div className="container mx-auto text-center flex flex-col items-center gap-20">
                <div className="w-full max-w-[1180px]">
                    <img src={images[0]} alt={name} className="pb-5 object-cover w-full max-w-[1180px] cursor-pointer" />
                    <p className="text-[22px] font-medium pb-[10px] text-black hover:text-red-800 cursor-pointer dark:text-white dark:hover:text-primary capitalize">
                        {t(`blog.${name.replace(/\s+/g, "_").toLowerCase()}`)}
                    </p>
                    <span className="w-full text-sm text-start font-normal text-gray-400 py-[20px]">
                        {description}
                    </span>
                    <WineBrand />
                    <div className="relative w-full pb-[56.25%]">
                        <iframe
                            src="https://www.youtube.com/embed/yYQOjWlQkxg?rel=0&autoplay=1&loop=1&mute=1&playlist=yYQOjWlQkxg"
                            className="absolute top-0 left-0 w-full h-full border-0 pt-6 pb-10"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>

                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};
