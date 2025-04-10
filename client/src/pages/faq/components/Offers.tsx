import { useTranslation } from "react-i18next";

export const Offers = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-white dark:bg-black mx-auto flex flex-col items-center text-center mt-10 pb-10 border-b font-sans px-4">
            <h2 className="text-[30px] font-medium max-w-[700px] leading-[40px]">
                {t("Never miss our updates about new arrivals and special offers")}
            </h2>
            <p className="mt-[22px] text-base">
                {t("Get the latest news & updates")}
            </p>
            <div className="text-black flex flex-col items-center w-full max-w-[730px]">
                <input
                    type="text"
                    placeholder={t("Email adress")}
                    className="border-b placeholder:dark:text-white dark:border-gray-200 bg-transparent mt-[40px] mb-5 pb-[16px] outline-none text-xs  border-black border-solid w-full placeholder:text-black dark:text-white"
                />
                <button className="bg-primary text-white text-base py-[14px] font-semibold tracking-[1px] transition-all w-full hover:bg-black uppercase">
                    {t("subscribe now")}
                </button>
            </div>
        </div>
    );
};