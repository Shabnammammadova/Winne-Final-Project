import { useState } from "react";
import FaqIcon from "../../../assets/icons/faq.svg"
import QuestionIcon from "../../../assets/icons/question.svg"

export const FaqAccordion = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleAccordion = (questionKey) => {
        setOpenQuestion(openQuestion === questionKey ? null : questionKey);
    };

    const faq = {
        question1: {
            question: " How long does it take for home delivery?",
            answer: "We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion in any circumstance where it makes more sense to use an alternative delivery method."
        },
        question2: {
            question: " Can I collect from a local store?",
            answer: "We offer a reserve and collect service. This is available on the checkout page. Please be aware, if the product is not available in a local store, you are unable to reserve it."
        },
        question3: {
            question: " Can you confirm you have received my return?",
            answer: "No, our courier company do not offer the service to deliver on weekends currently."
        },
        question4: {
            question: " Do you offer a VAT discount to non EU customers?",
            answer: "Customer’s ordering from outside the European Union can contact us via telephone, live chat, or e-mail and quote the order reference number. Our customer services team will go through the process to remove the VAT off of their order."
        },
        question5: {
            question: "Who pays for return postage?",
            answer: "If you are returning an unsuitable item for a refund we will refund the cost of the item only and not the original delivery cost.Should you be returning a faulty item for a refund we will refund both the original shipping costs and the return delivery costs."
        }
    }

    return (
        <div className="py-4 bg-white">
            <div className="max-w-screen-md  mx-auto sm:px-6 lg:px-8 flex flex-col justify-between">
                <div className="text-center">
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Frequently Asked <span className="text-red-800">Questions</span>
                    </h3>
                </div>
                <div className="mt-20">
                    <ul>
                        {Object.keys(faq).map((key) => (
                            <li key={key} className="text-left mb-10">
                                <div className="flex flex-row items-start mb-5">
                                    <div
                                        className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold cursor-pointer"
                                        onClick={() => toggleAccordion(key)}
                                    >
                                        <img src={QuestionIcon} alt="Question Icon" />
                                    </div>
                                    <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                                        <h4 className="text-md leading-6 font-medium text-gray-900">
                                            {faq[key].question}
                                        </h4>
                                    </div>
                                </div>

                                {openQuestion === key && (
                                    <div className="flex flex-row items-start">
                                        <div className="bg-red-100 p-5 px-10 w-full flex items-center">
                                            <p className="text-gray-700 text-sm">{faq[key].answer}</p>
                                        </div>
                                        <div
                                            className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold cursor-pointer"
                                        >
                                            <img src={FaqIcon} alt="FAQ Icon" />
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


