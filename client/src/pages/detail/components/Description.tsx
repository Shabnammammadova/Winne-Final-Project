import PlaneIcon from "../../../assets/icons/plane.svg"
import RetrunIcon from "../../../assets/icons/return.svg"
import WarrantyIcon from "../../../assets/icons/varranty.svg"
import SecrureIcon from "../../../assets/icons/secure.svg"
import { useTranslation } from "react-i18next"

export const Description = () => {
    const { t } = useTranslation()
    return (
        <div className="dark:bg-black">
            <div className="container flex 2xs:flex-col xs:items-center lg:flex-row gap-4 font-sans pb-[60px] ">
                <div className="w-[330px] h-[120px] flex flex-col items-center gap-6 justify-center border border-solid border-gray-200">
                    <img src={PlaneIcon} alt="" className="w-[35px] h-[35px] text-red-800" />
                    <p className="text-xs tracking-[3.2px] leading-[1.2px] font-medium uppercase">{t("WORLDWIDE SHIPPING")}</p>
                </div>
                <div className="w-[330px] h-[120px] flex flex-col items-center gap-6 justify-center border border-solid border-gray-200">
                    <img src={RetrunIcon} alt="" className="w-[35px] h-[35px] text-red-800" />
                    <p className="text-xs tracking-[3.2px] leading-[1.2px] font-medium">{t("FREE 60-DAY RETURNS")}</p>
                </div>
                <div className="w-[330px] h-[120px] flex flex-col items-center gap-6 justify-center border border-solid border-gray-200">
                    <img src={WarrantyIcon} alt="" className="w-[35px] h-[35px] text-red-800" />
                    <p className="text-xs tracking-[3.2px] leading-[1.2px] font-medium">{t("24 MONTH WARRANTY")}</p>
                </div>
                <div className="w-[330px] h-[120px] flex flex-col items-center gap-6 justify-center border border-solid border-gray-200">
                    <img src={SecrureIcon} alt="" className="w-[35px] h-[35px] text-red-800" />
                    <p className="text-xs tracking-[3.2px] leading-[1.2px] font-medium">{t("100% SECRUE CHECKOUT")}</p>
                </div>
            </div>
        </div>
    )
}
