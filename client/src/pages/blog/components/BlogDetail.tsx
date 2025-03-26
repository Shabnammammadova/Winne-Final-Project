import { useParams } from "react-router-dom";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Spinner } from "@/components/shared/Spinner";
import { QUERY_KEYS } from "@/constants/query-keys";
import blogService from "@/services/blog";
import { useQuery } from "@tanstack/react-query";
import { WineBrand } from "./WineBrand";
import { NotFound } from "@/pages/not-found";
import { useTranslation } from "react-i18next";
import VideoBackground from "../../../assets/videos/8764786-uhd_3840_2160_25fps.mp4"

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
        <div className="bg-white dark:bg-black font-sans border-b border-b-gray-200">
            <div className="container mx-auto text-center flex flex-col items-center gap-20">
                <div className="w-full max-w-[1480px]">
                    <img src={images[0]} alt={name} className="pb-5 object-cover w-full max-w-[1480px] cursor-pointer" />
                    <p className="text-[22px] font-medium pb-[10px] text-black hover:text-red-800 cursor-pointer dark:text-white dark:hover:text-primary capitalize">
                        {t(`blog.${name.replace(/\s+/g, "_").toLowerCase()}`)}
                    </p>
                    <span className="w-full text-sm text-start font-normal text-gray-400 py-[20px]">
                        {description}
                    </span>
                    <WineBrand />
                    <div className="relative w-full pb-5 ">
                        <div>
                            <video
                                width="100%"
                                height="360"
                                loop
                                muted
                                autoPlay
                                playsInline
                                style={{
                                    objectFit: 'cover',
                                    cursor: 'pointer'
                                }}
                            >
                                <source src={VideoBackground} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};
