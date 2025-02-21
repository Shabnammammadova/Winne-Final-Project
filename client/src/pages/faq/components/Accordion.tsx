import { useState } from "react";
import { Faq } from "@/types";
import { useTranslation } from "react-i18next";


type Props = {
    faq: Faq[]
}

export const FaqAccordion = ({ faq }: Props) => {
    const { t } = useTranslation()
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const toggleAccordion = (questionKey: string) => {
        setOpenQuestion(openQuestion === questionKey ? null : questionKey);
    };


    return (
        <div className="py-4 bg-white dark:bg-black">
            <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8 flex flex-col justify-between">
                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {t("Frequently Asked ")}{" "}
                        <span className="text-red-800 ml-[2px]">{t("Questions")}</span>
                    </h3>
                </div>
                <div className="mt-6">
                    <ul className="max-w-3xl mx-auto mt-1 divide-y shadow shadow-primary rounded-xl">
                        {faq?.map((faqlist) => (
                            <li key={faqlist._id}>
                                <details className="group" >
                                    <summary className="flex items-center gap-3 px-4 py-5 font-medium marker:content-none hover:cursor-pointer">
                                        <svg
                                            className="w-5 h-5 text-black dark:text-white transition group-open:rotate-90"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            ></path>
                                        </svg>
                                        <span className="text-md leading-6 font-medium text-black dark:text-white">
                                            {t(`faqs.${faqlist.question.replace(/\s+/g, "_").toLowerCase()}`)}
                                        </span>
                                    </summary>

                                    <article className="px-4 pb-4 border border-t-gray-100 pt-2">
                                        <p className="text-black dark:text-white text-sm ">
                                            {t(`faqs.${faqlist.answer.replace(/\s+/g, "_").toLowerCase()}`)}
                                        </p>
                                    </article>
                                </details>
                            </li>
                        ))}
                    </ul>
                </div>

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


