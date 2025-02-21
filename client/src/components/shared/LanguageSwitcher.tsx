import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [showButtons, setShowButtons] = useState(false);


    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        setShowButtons(false);
    };
    return (
        <div className="relative flex items-center">
            <MdOutlineLanguage
                className="w-[24px] h-[24px] cursor-pointer text-black dark:text-white "
                onClick={() => setShowButtons(!showButtons)}
            />

            {showButtons && (
                <div className="absolute -left-2 top-full mt-2 flex flex-col space-y-2 bg-white shadow-lg rounded-md border border-gray-300 p-[10px] z-10">
                    <button
                        onClick={() => changeLanguage('en')}
                        className="p-[2px]  text-sm font-semibold text-black border-b"
                    >
                        EN
                    </button>
                    <button
                        onClick={() => changeLanguage('es')}
                        className="p-[2px] text-sm font-semibold text-black"
                    >
                        ES
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
