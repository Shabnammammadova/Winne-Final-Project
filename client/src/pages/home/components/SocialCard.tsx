import { Instagram } from "lucide-react"
import Instagram1 from "../../../assets/images/instagram1.webp"
import Instagram2 from "../../../assets/images/instagram2.webp"
import Instagram3 from "../../../assets/images/instagram3.webp"
import Instagram4 from "../../../assets/images/instagram4.webp"
import Instagram5 from "../../../assets/images/instagram5.webp"
import { useTranslation } from "react-i18next"

export const SocialCard = () => {
    const { t } = useTranslation()
    return (
        <div className="container my-[70px] bg-background dark:bg-black">
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <Instagram className="w-[51px] h-[60px] font-sans dark:text-white" />
                </div>
                <h3 className="text-2xl font-semibold mt-2 pb-[25px] text-black font-sans capitalize dark:text-white">{t("follow us on instagram")}</h3>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2">
                <div className="w-full relative group group mx-auto overflow-hidden cursor-pointer">
                    <img src={Instagram1} alt="" className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 group-hover:bg-opacity-70 group-hover:flex hidden  flex-col items-center justify-center ">
                        <div className="text-center">
                            <Instagram className="w-[40px] h-[40px] font-sans text-white" />
                        </div>
                        <h3 className="text-sm font-medium mt-2 pb-[25px] text-white font-sans uppercase tracking-[.2em]">{t("shop it")}</h3>
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  gap-x-2 gap-y-4 lg:gap-x-4 md:gap-x-2">
                    <div className="w-auto relative group group mx-auto h-auto overflow-hidden cursor-pointer">
                        <img src={Instagram2} alt="" className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 group-hover:bg-opacity-70 group-hover:flex hidden  flex-col items-center justify-center ">
                            <div className="text-center">
                                <Instagram className="w-[40px] h-[40px] font-sans text-white" />
                            </div>
                            <h3 className="text-sm font-medium mt-2 pb-[25px] text-white font-sans uppercase tracking-[.2em]">{t("shop it")}</h3>
                        </div>
                    </div>
                    <div className="w-auto relative group group mx-auto h-auto overflow-hidden cursor-pointer">
                        <img src={Instagram3} alt="" className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 group-hover:bg-opacity-70 group-hover:flex hidden  flex-col items-center justify-center ">
                            <div className="text-center">
                                <Instagram className="w-[40px] h-[40px] font-sans text-white" />
                            </div>
                            <h3 className="text-sm font-medium mt-2 pb-[25px] text-white font-sans uppercase tracking-[.2em]">{t("shop it")}</h3>
                        </div>
                    </div>
                    <div className="w-auto relative group group mx-auto h-auto overflow-hidden cursor-pointer">
                        <img src={Instagram4} alt="" className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 group-hover:bg-opacity-70 group-hover:flex hidden  flex-col items-center justify-center ">
                            <div className="text-center">
                                <Instagram className="w-[40px] h-[40px] font-sans text-white" />
                            </div>
                            <h3 className="text-sm font-medium mt-2 pb-[25px] text-white font-sans uppercase tracking-[.2em]">{t("shop it")}</h3>
                        </div>
                    </div>
                    <div className="w-auto relative group group mx-auto h-auto overflow-hidden cursor-pointer">
                        <img src={Instagram5} alt="" className="w-full h-auto transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-700 group-hover:bg-opacity-70 group-hover:flex hidden  flex-col items-center justify-center ">
                            <div className="text-center">
                                <Instagram className="w-[40px] h-[40px] font-sans text-white" />
                            </div>
                            <h3 className="text-sm font-medium mt-2 pb-[25px] text-white font-sans uppercase tracking-[.2em]">{t("shop it")}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
