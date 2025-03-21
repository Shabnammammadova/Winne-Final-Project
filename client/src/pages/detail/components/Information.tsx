import { useState } from "react";
import { History } from "./History";
import { Return } from "./Return";
import { Review } from "./Review";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import reviewService from "@/services/review";
import { Spinner } from "@/components/shared/Spinner";

export const Information = () => {
    const [activeTab, setActiveTab] = useState("description");
    const { t } = useTranslation()
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const { data: review, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.REVIEW],
        queryFn: () => reviewService.getAll(),
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center mt-28">
                <Spinner />
            </div>
        );
    }

    const reviews = review?.data?.items || [];

    return (
        <div className="font-sans">
            <div className="flex flex-row items-center justify-center border border-solid border-t border-b">
                <button
                    className={`text-lg m-6 group relative w-max ${activeTab === "description" ? "text-primary" : "text-black"}`}
                    onClick={() => handleTabClick("description")}
                >
                    <p className="text-base uppercase font-medium tracking-[1.6px] text-center mx-auto dark:text-white">{t("Description")}</p>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                </button>

                <button
                    className={`text-lg m-6 group relative w-max ${activeTab === "information" ? "text-primary" : "text-black"}`}
                    onClick={() => handleTabClick("information")}
                >
                    <p className="text-base uppercase font-medium tracking-[1.6px] dark:text-white">{t("Additional Information")}</p>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                </button>

                <button
                    className={`text-lg m-6 group relative w-max ${activeTab === "review" ? "text-primary" : "text-black"}`}
                    onClick={() => handleTabClick("review")}
                >
                    <p className="text-base uppercase font-medium tracking-[1.6px] dark:text-white">{t("Review")}</p>
                    <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-primary group-hover:w-3/6"></span>
                </button>
            </div>
            {activeTab === "description" && <History />}
            {activeTab === "information" && <Return />}
            {activeTab === "review" && (
                reviews.length > 0 ? (
                    reviews.map((review) => <Review key={review._id} review={review} />)
                ) : (
                    <div className="text-center mt-4 text-lg">No reviews available.</div>
                )
            )}

        </div>
    );
};
