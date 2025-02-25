import { useTranslation } from "react-i18next"


const SuccessPage = () => {
    const { t } = useTranslation()
    return (
        <div className="bg-white mx-auto py-10 border border-gray-200 text-center font-sans dark:bg-black">
            <img src="https://shopogolic.net/ckfinder/userfiles/images/payment%20done.png" alt="" className="w-[300px] text-center m-auto" />
            <p className="text-2xl font-semibold dark:text-white">{t("Your payment was succesful")}</p></div>
    )
}

export default SuccessPage