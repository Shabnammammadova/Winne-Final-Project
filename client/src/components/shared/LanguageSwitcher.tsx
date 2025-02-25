import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import EnFlag from "../../assets/images/united-states-of-america.png";
import EsFlag from "../../assets/images/espano.png";
import { MdOutlineLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showButtons, setShowButtons] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
    }, [selectedLanguage, i18n]);

    const changeLanguage = (lang: string) => {
        localStorage.setItem("language", lang);
        setSelectedLanguage(lang);
        setShowButtons(false);
    };

    return (
        <div className="relative">
            <MdOutlineLanguage
                className="w-[24px] h-[24px] cursor-pointer text-black dark:text-white"
                onClick={() => setShowButtons(!showButtons)}
            />

            {showButtons && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full gap-1 mt-2 flex flex-col items-center bg-white shadow-md rounded-md border border-gray-300 py-2 w-28 z-10">
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`flex items-center justify-center gap-2 w-full text-sm font-semibold text-gray-700 px-3 py-2 rounded-md transition ${selectedLanguage === "en" ? "bg-gray-200" : "hover:bg-gray-100"
                            }`}
                    >
                        <img src={EnFlag} alt="English Flag" className="w-5 h-5" />
                        EN
                    </button>
                    <button
                        onClick={() => changeLanguage("es")}
                        className={`flex items-center justify-center gap-2 w-full text-sm font-semibold text-gray-700 px-3 py-2 rounded-md transition ${selectedLanguage === "es" ? "bg-gray-200" : "hover:bg-gray-100"
                            }`}
                    >
                        <img src={EsFlag} alt="Spanish Flag" className="w-5 h-5" />
                        ES
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
