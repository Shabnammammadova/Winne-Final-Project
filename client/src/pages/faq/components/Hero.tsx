import { ChevronRight } from "lucide-react"
import HeadingImage from "../../../assets/images/heading-about.webp"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"
import { useTranslation } from "react-i18next"

export const FaqHero = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="relative bg-gradient-to-t h-[400px] w-full bg-cover bg-center mx-auto flex flex-col justify-center" style={{ backgroundImage: `url(${HeadingImage})` }}>
                <div className="font-sans text-white text-[46px] font-medium mx-auto flex items-center justify-center text-center capitalize">
                    {t("faq")}s
                </div>
                <div className="pt-[6px] pb-[30px] text-white text-base text-center font-sans flex items-center justify-center mx-auto">
                    <p className="hover:text-red-800 cursor-pointer capitalize"><Link to={paths.HOME}>{t("home")}</Link></p>
                    <ChevronRight className="w-[16px] h-[16px]" />
                    <span className="capitalize">{t("faq")}s</span>
                </div>
            </div>
        </div>
    )
}