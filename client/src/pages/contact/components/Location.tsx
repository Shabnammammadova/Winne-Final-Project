import { MdOutlineLocationOn } from "react-icons/md"
import { MdOutlinePhone } from "react-icons/md"
import { MdOutlineMail } from "react-icons/md"
import { LuClock } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export const Location = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className="container  mt-[100px] mb-[100px] grid xs:grid-cols-1 md:grid-cols-2  gap-y-2">
                <div className="font-sans flex flex-col w-full px-[40px]">
                    <h2 className="pb-[15px] text-[34px] font-medium capitalize"> {t("contact us")}</h2>
                    <p className="text-[15px] leading-5">{t("If you would like to know more about our policies, you can consult our Terms and Conditions. You will also be able to follow your order (tracking number will be provided in an e-mail after ordering). You wish to return some items?")}<span className="text-red-800 cursor-pointer capitalize">{t("click here")}.</span></p>
                    <div className="mt-5 flex flex-col">
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <MdOutlineLocationOn className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px] capitalize">{t("address")}</h3>
                                <p className="text-[15px] leading-5 text-gray-400">
                                    {t("The Wine House 2311 Cotner Avenue Los Angeles, CA 90064-1877")}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <MdOutlinePhone className="w-[30px] h-[30px] dark:text-white" />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px] capitalize">{t("phone")}</h3>
                                <p className="text-[15px] leading-5 text-gray-400 cursor-pointer">
                                    (310) 479-3731
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <MdOutlineMail className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px] capitalize">{t("email")}</h3>
                                <p className="text-[15px] leading-5 text-gray-400 cursor-pointer">
                                    wine@winehouse.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <LuClock className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px] capitalize">{t("open hours")}</h3>
                                <div className="flex flex-col">
                                    <p className="text-[15px] leading-5 text-gray-400 capitalize">
                                        {t("mondoy to friday")} 09:30 - 17:30
                                    </p>
                                    <p className="text-[15px] leading-5 text-gray-400 capitalize">
                                        {t("saturday&sunday")} 10:00 - 15:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full px-[20px]">
                    <h2 className="pb-[15px] text-[34px] font-medium">{t("Send us an message")}</h2>
                    <div className="flex items-center flex-col w-full">
                        <form action="" className="mt-[40px]">
                            <input type="text" placeholder={t("Your name")} className="w-full h-[60px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none " />
                            <input type="text" placeholder={t("Your mail")} className="w-full h-[60px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none " />
                            <textarea name="" id="" className="w-full h-[200px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none"></textarea>
                            <button className="w-full text-lg bg-black text-white uppercase font-semibold leading-[60px]  px-[65px] mb-5 transition-all duration-300 outline-none hover:bg-primary dark:bg-white dark:text-black hover:dark:bg-primary">
                                {t("send")}
                            </button>
                        </form>
                    </div>
                </div>




            </div>
        </div>
    )
}
