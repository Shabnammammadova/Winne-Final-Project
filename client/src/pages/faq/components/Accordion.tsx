import { useState } from "react";
import { Faq } from "@/types";
import { useTranslation } from "react-i18next";

type Props = {
    faq: Faq[];
};

export const FaqAccordion = ({ faq }: Props) => {
    const { t } = useTranslation();
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    const toggleAccordion = (questionKey: string) => {
        setOpenQuestion(openQuestion === questionKey ? null : questionKey);
    };

    return (
        <div className="py-10 dark:bg-black dark:text-white">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">

                <div className="text-center mb-8">
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        {t("Frequently Asked")}
                        <span className="text-primary ml-2">{t("Questions")}</span>
                    </h3>
                </div>

                <ul className="space-y-4">
                    {faq?.map((faqlist) => {
                        const isOpen = openQuestion === faqlist._id;

                        return (
                            <li key={faqlist._id} className="rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-all">
                                <button
                                    onClick={() => toggleAccordion(faqlist._id)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left font-medium border border-gray-200 text-gray-900 dark:bg-red-50 dark:text-black hover:bg-gray-100 dark:hover:bg-gray-50 rounded-lg transition-all"
                                >
                                    <span className="text-lg">
                                        {t(`faqs.${faqlist.question.replace(/\s+/g, "_").toLowerCase()}`)}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-primary transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden dark:bg-red-50 transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 py-4 px-6" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-700 dark:text-black text-md">
                                        {t(`faqs.${faqlist.answer.replace(/\s+/g, "_").toLowerCase()}`)}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};


FaqAccordion.Skeleton = function () {
    return (
        <div className="max-w-screen-md  mx-auto sm:px-6 lg:px-8 flex flex-col justify-between py-6">
            <h1 className="w-64 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <div className="mt-20 bg-white rounded shadow w-[400px] p-4">
                <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
            <div className="mt-5 bg-white rounded shadow w-[600px] p-4">
                <div className="animate-pulse flex space-x-4 flex-row-reverse">
                    <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


