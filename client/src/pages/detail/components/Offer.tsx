import { useTranslation } from "react-i18next"


export const Offer = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="mt-7 border-solid border py-7 px-[17px] relative  border-gray-200">
                <h3 className="text-lg font-semibold text-green-600 absolute bg-white  top-[-14px] left-[60px] dark:bg-black">{t("Special Offer")}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>✔ {t("In Stock")}</li>
                    <li>✔ {t("Free Delivery Available")}*</li>
                    <li>
                        ✔ {t("Sale 30% Off Use Code")}: <span className="font-semibold">{t("Deal30")}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
