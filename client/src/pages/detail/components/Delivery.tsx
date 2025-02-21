import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslation } from "react-i18next"

export function Delivery() {
    const { t } = useTranslation()
    return (
        <Dialog>
            <DialogTrigger asChild className="font-sans">
                <span className="cursor-pointer text-lg font-bold text-black mt-5 hover:text-red-800 transition-all duration-300 dark:text-white">{t("Delivery & Returns")}</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">{t("Delivery")}</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>{t("All orders shipped with UPS Express.")}</p>
                        <p>{t("Always free shipping for orders over US $250.")}</p>
                        <p>{t("All orders are shipped with a UPS tracking number")}.</p>
                    </div>
                </DialogHeader>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">{t("Returns")}</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>{t("Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.")}</p>
                        <p>{t("Refunds will be charged back to the original form of payment used for purchase..")}</p>
                        <p>{t("Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.")}</p>
                        <p>{t("All sale items are final purchases.")}</p>
                    </div>
                </DialogHeader>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-black mb-2">{t("Help")}</DialogTitle>
                    <div className="flex flex-col gap-2 text-gray-500">
                        <p>{t("Give us a shout if you have any other questions and/or concerns.")}</p>
                        <p>{t("Email")}: <u className=" text-black hover:text-red-800 cursor-pointer"> help@gmail.com</u></p>
                        <p>{t("Phone")}: +1 (23) 456 789</p>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

