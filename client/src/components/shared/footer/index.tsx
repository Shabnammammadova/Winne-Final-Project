import Logo from "../../../assets/images/logo.webp"
import Message from "../../../assets/icons/message.svg"
import Payment from "../../../assets/images/payment.webp"
import { Dribbble, Instagram, Twitter, Youtube } from "lucide-react"
import { useTranslation } from "react-i18next"


export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="bg-white font-sans dark:bg-black border border-t-gray-200 dark:text-white">
            <div className="container">
                <div className="2xs:flex-col 2xs:gap-16 lg:flex-row flex gap-24">
                    <div className="pt-[50px] 2xs:flex-col 2xs:items-center lg:items-start flex ">
                        <img src={Logo} alt="" className="w-[140px] cursor-pointer filter dark:invert" />
                        <p className="mt-[23px] text-sm 2xs:text-center lg:text-left text-black dark:text-white">{t("subscribe_our_newsletter_and_get_discount_30_percent_off")}</p>
                        <div className="relative flex flex-row mt-5">
                            <input type="text" className=" leading-[40px] w-[250px] h-[40px] text-[1rem]  px-[.75rem] py-[.375rem] dark:text-black bg-slate-50 outline-none" placeholder={t("your_email_address...")} />
                            <button type="submit" className=" absolute  top-0 right-0 bg-black text-white dark:text-black dark:bg-primary dark:hover:bg-primary  w-[40px] h-[40px] flex items-center justify-center hover:bg-primary"><img src={Message} alt="" className="w-[15px] h-[12px] !text-white !fill-white" /></button>
                        </div>
                        <div className="flex items-center gap-3 mt-[30px] cursor-pointer">
                            <Twitter className="mr-[.5rem] text-black dark:text-white w-[15px] h-4 fill-black hover:text-red-800 hover:fill-red-800 dark:hover:fill-red-800 dark:hover:text-red-800" />
                            <Dribbble className="mr-[.5rem] text-black dark:text-white w-[15px] h-4 hover:text-red-800 dark:hover:text-red-800" />
                            <Youtube className="mr-[.5rem] text-black dark:text-white w-[15px] h-4 hover:text-red-800 dark:hover:text-red-800" />
                            <Instagram className="mr-[.5rem] text-black dark:text-white w-[15px] h-4 hover:text-red-800 dark:hover:text-red-800" />
                        </div>
                    </div>
                    <div className="2xs:flex-col 2xs:items-center 2xs:justify-center 2xs:gap-y-20 lg:flex-row flex w-full">
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold capitalize dark:text-white">{t("customer_care")}</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block dark:bg-white"></span>
                            </div>
                            <ul className=" 2xs:text-center lg:text-left text-2xs 2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans capitalize">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("pagination")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("terms&condition")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("contact")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("home_page")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("terms_of_use")}</a></li>
                            </ul>
                        </div>
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold capitalize dark:text-white">{t("quick_shop")}</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block dark:bg-white"></span>
                            </div>
                            <ul className="2xs:text-center lg:text-left text-2xs 2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans capitalize">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("help_center")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("adress_store")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("privacy_policy")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("receivers_amplifiers")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("clothings")}</a></li>
                            </ul>
                        </div>
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold capitalize dark:text-white">{t("company")}</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block dark:bg-white"></span>
                            </div>
                            <ul className="2xs:text-center lg:text-left text-2xs  2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans capitalize">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("delivery")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("lecal_notice")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("documentation")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">{t("secure_payment")}</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">{t("stores")}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xs:mt-[60px] lg:mt-0 border-solid py-[26px] border-t-[1px]">
                <div className="container">
                    <div className="xs:flex-col xs:justify-center lg:flex lg:flex-row items-center lg:justify-between">
                        <div className="xs:justify-center xs:text-center flex items-center font-sans text-sm">
                            © {t("copyright_2025_winne_by_engotheme._powered by shopify.")}
                        </div>
                        <div className="xs:flex xs:items-center xs:justify-center">
                            <img src={Payment} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
