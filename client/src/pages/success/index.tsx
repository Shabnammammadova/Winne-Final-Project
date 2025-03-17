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
        console.log("userID from Redux:", userID);

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
            body: JSON.stringify({ sessionId, userID }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response from backend:", data);
                if (data.success) {
                    setPaymentStatus(t("Your payment was successful."));
                } else {
                    setPaymentStatus(data.message || t("Your payment was successful."));
                }
            })
            .catch((error) => {
                console.error("Error verifying payment:", error);
                setPaymentStatus(t("Error verifying payment. Please try again."));
            })
            .finally(() => setLoading(false));
    }, [userID]);

    return (
        <div className="bg-white mx-auto py-10 border border-gray-200 text-center font-sans dark:bg-black">
            <img
                src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
                alt="Payment success"
                className="w-[300px] text-center m-auto"
            />
            {loading ? (
                <p className="text-2xl  dark:text-white">{t("Verifying payment...")}</p>
            ) : (
                <p className="text-2xl  dark:text-white">{paymentStatus}</p>
            )}
        </div>
    );
};

export default SuccessPage;
