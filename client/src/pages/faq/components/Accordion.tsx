import { useState } from "react";
import FaqIcon from "../../../assets/icons/faq.svg"
import QuestionIcon from "../../../assets/icons/question.svg"
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
            <div className="max-w-screen-md  mx-auto sm:px-6 lg:px-8 flex flex-col justify-between">
                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-white">
                        {t("Frequently Asked ")} <span className="text-red-800 ml-[2px]">{t("Questions")}</span>
                    </h3>
                </div>
                <div className="mt-20">
                    <ul>
                        {
                            faq?.map((faqlist) => (
                                <li key={faqlist._id} className="text-left mb-10">
                                    <div className="flex flex-row items-start mb-5">
                                        <div
                                            className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold cursor-pointer"
                                            onClick={() => toggleAccordion(faqlist._id)}
                                        >
                                            <img src={QuestionIcon} alt="Question Icon" />
                                        </div>
                                        <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                                            <h4 className="text-md leading-6 font-medium text-gray-900">
                                                {faqlist.question}
                                            </h4>
                                        </div>
                                    </div>
                                    {openQuestion === faqlist._id && (
                                        <div className="flex flex-row items-start">
                                            <div className="bg-red-100 p-5 px-10 w-full flex items-center">
                                                <p className="text-gray-700 text-sm">
                                                    {faqlist.answer}
                                                </p>
                                            </div>
                                            <div
                                                className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold cursor-pointer"
                                            >
                                                <img src={FaqIcon} alt="FAQ Icon" />
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))
                        }
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


