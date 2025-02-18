import Newsimage from "../../../assets/images/img-newsletter.webp"
import Email from "../../../assets/icons/email.svg"
import { useTranslation } from "react-i18next"

export const News = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-white pt-[60px] dark:bg-black">
            <div className="relative w-full h-[359px] pt-[10px]  bg-cover bg-center mx-auto flex flex-col justify-center" style={{ backgroundImage: `url(${Newsimage})` }}>
                <div className="container max-w-[1170px] flex  2xs:flex-col xs:flex-col md:flex-col lg:flex-col xl:flex-row justify-between items-center">
                    <div className="flex items-center justify-center m-auto gap-4">
                        <img src={Email} alt="" className="w-[64px] h-[64px]" />
                        <span className="border-l-2 h-[120px] border-white">
                            <div className="flex flex-col ml-5 text-white font-sans w-[300px]">
                                <p className="text-[26px] uppercase">{t("our")}</p>
                                <b className="font-bold text-[26px] leading-[4.8px] uppercase">{t("newsletter")}!</b>
                                <p className="text-xl leading-6 font-normal mt-[30px]">{t("It only takes a second to be the first to find out about our latest news")}</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
