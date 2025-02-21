import { useTranslation } from "react-i18next"
import History1 from "../../../assets/images/wineHistory1.webp"
import History2 from "../../../assets/images/wineHistory2.webp"

export const History = () => {
    const { t } = useTranslation()
    return (
        <div className=" border-b dark:bg-black dark:text-white border-b-gray-100">
            <div className="w-full max-w-[1170px]  mx-auto pt-[40px] pb-[40px] font-sans">
                <div className="grid 2xs:grid-cols-1 md:grid-cols-2 gap-4">
                    <img src={History1} alt="" />
                    <div>
                        <h3 className="text-3xl font-medium leading-3 capitalize mt-5 mb-4">{t("Wine history")}</h3>
                        <span className="text-[15px] text-gray-400 font-normal leading-[28px]">{t("Wine is an alcoholic beverage fermented from grapes. The natural chemical balance allows grapes to ferment without the need for added sugars, acids, enzymes, water or other nutrients. Yeast consumes the sugars in the grapes and converts them into alcohol and carbon dioxide. Different grape varieties and different yeast strains form different forms of wine.")}</span>
                    </div>
                </div>
                <div className="grid 2xs:grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    <div>
                        <h3 className="text-3xl font-medium leading-3 capitalize mt-5 mb-4">{t("Uses of alcohol")}</h3>
                        <span className="text-[15px] text-gray-400 font-normal leading-[28px]">{t("Wine is an alcoholic beverage fermented from grapes. The natural chemical balance allows grapes to ferment without the need for added sugars, acids, enzymes, water or other nutrients. Yeast consumes the sugars in the grapes and converts them into alcohol and carbon dioxide. Different grape varieties and different yeast strains form different forms of wine.")}</span>
                    </div>
                    <img src={History2} alt="" />
                </div>
            </div>
        </div>

    )
}
