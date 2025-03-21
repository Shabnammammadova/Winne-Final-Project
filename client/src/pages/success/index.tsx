import { useAppSelector } from "@/hooks/redux";
import axiosInstance from "@/services";
import { selectUserData } from "@/store/features/userSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const { t } = useTranslation();
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAppSelector(selectUserData);
    const navigate = useNavigate();
    const userID = user?._id;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("session_id");

        if (!sessionId) {
            setPaymentStatus(t("Invalid session. Please try again."));
            setLoading(false);
            return;
        }
        console.log(paymentStatus, loading);


        fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/api/payment/verify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId, userID }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setPaymentStatus(t("Your payment was successful."));

                    clearBasket();

                    setTimeout(() => {
                        navigate("/", { replace: true });
                        window.location.reload();
                    }, 3000);
                }
                else {
                    setPaymentStatus(data.message || t("Your payment was successful."));
                }
            })
            .catch((error) => {
                console.error("Error verifying payment:", error);
                setPaymentStatus(t("Error verifying payment. Please try again."));
            })
            .finally(() => setLoading(false));
    }, [userID, navigate, t]);


    const clearBasket = async () => {
        try {
            const response = await axiosInstance.delete(`/basket/clear/${userID}`);
            console.log("Basket cleared on success page:", response.data);
        } catch (error) {
            console.error("Error clearing the basket on success page:", error);
        }
    };

    return (
        <div className="bg-white mx-auto py-10 border border-gray-200 text-center font-sans dark:bg-black">
            <img
                src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png"
                alt="Payment success"
                className="w-[300px] text-center m-auto"
            />
            <p className="text-2xl  dark:text-white">{t("Your payment was successful.")}</p>
        </div>
    );
};

export default SuccessPage;
