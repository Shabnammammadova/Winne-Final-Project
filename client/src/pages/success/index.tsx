import { useAppSelector } from "@/hooks/redux";
import { selectUserData } from "@/store/features/userSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const SuccessPage = () => {
    const { t } = useTranslation();
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAppSelector(selectUserData);
    const userID = user?._id;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("session_id");

        console.log("sessionId from URL:", sessionId);
        console.log("userID from Redux:", userID); // Burada yoxla!

        if (!sessionId) {
            setPaymentStatus(t("Invalid session. Please try again."));
            setLoading(false);
            return;
        }

        fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/api/payment/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId, userID }), // userID göndərilir
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response from backend:", data);
                if (data.success) {
                    setPaymentStatus(t("Your payment was successful."));
                } else {
                    setPaymentStatus(data.message || t("Payment verification failed."));
                }
            })
            .catch((error) => {
                console.error("Error verifying payment:", error);
                setPaymentStatus(t("Error verifying payment. Please try again."));
            })
            .finally(() => setLoading(false));
    }, [userID]); // `userID`-ni asılılığa əlavə etdik

    return (
        <div className="bg-white mx-auto py-10 border border-gray-200 text-center font-sans dark:bg-black">
            <img
                src="https://shopogolic.net/ckfinder/userfiles/images/payment%20done.png"
                alt="Payment success"
                className="w-[300px] text-center m-auto"
            />
            <p className="text-2xl font-semibold dark:text-white">
                {t("Payment Status")}
            </p>
            {loading ? (
                <p className="text-lg mt-4 dark:text-white">{t("Verifying payment...")}</p>
            ) : (
                <p className="text-lg mt-4 dark:text-white">{paymentStatus}</p>
            )}
        </div>
    );
};

export default SuccessPage;
