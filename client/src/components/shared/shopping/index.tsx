import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Basket } from "@/types";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "@/constants/paths";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import basketService from "@/services/basket";
import { toast } from "sonner";
import getStripe from "@/utils/stripe";
import { QUERY_KEYS } from "@/constants/query-keys";
import { SlBag } from "react-icons/sl";
import { useTranslation } from "react-i18next";

type Props = {
    basket: Basket[]
    setBasket: React.Dispatch<React.SetStateAction<Basket[]>>
}

export function ShoppingCart({ basket, setBasket }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const isBasketLoaded = basket && basket.length > 0;
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    const { t } = useTranslation()
    const goToShop = () => {
        handleClose();
        navigate(paths.SHOP);
    };
    const { mutate } = useMutation({
        mutationFn: basketService.remove,
        onSuccess: async () => {
            toast.success("Product removed from basket!");
            queryClient.invalidateQueries();
        },
        onError: () => {
            toast.error("Failed to remove product from basket.");
        },
    });

    function onSubmit(id: string) {
        mutate(id)
    }


    const handleCheckout = async () => {
        try {
            console.log("Basket before checkout:", basket);

            const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/checkout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: basket }),
            });

            const data = await response.json();
            console.log("Response from API:", data);

            const { sessionId, order } = data;

            if (order) {
                console.log("Order received:", order);
                queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ORDERS] });

            }

            const stripe = await getStripe();

            if (stripe && sessionId) {
                await stripe.redirectToCheckout({ sessionId });
                setBasket([]);
            }
        } catch (error) {
            toast.error("Checkout error.");
            console.error(error);
        }
    };




    return (
        <>
            <button onClick={handleOpen}>
                <SlBag className="w-[24px] h-[24px]  dark:text-white" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={handleClose}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className="fixed top-0 right-0 z-50 w-[300px] sm:w-[400px] h-full bg-white dark:bg-black shadow-lg"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="p-4 border-b">
                                <h2 className="text-2xl text-center font-semibold">{t("Shopping Cart")}</h2>
                            </div>
                            {
                                !isBasketLoaded ? (
                                    <div className="flex flex-col items-center justify-center gap-2 mx-auto absolute top-1/3 w-full">
                                        <p className="text-center text-xl text-black font-bold mt-8 dark:text-white">
                                            {t("Your shopping bag is empty.")}
                                        </p>
                                        <Link to={paths.SHOP}>
                                            <button className="text-sm font-semibold text-white bg-black hover:bg-primary uppercase tracking-[.2em] px-[10px] py-[10px] dark:bg-white dark:text-black dark:hover:bg-primary" onClick={goToShop}>
                                                {t("Go to the shop")}
                                            </button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col h-full">
                                        <div className="p-4 flex flex-col gap-4 max-h-[calc(100vh-150px)] overflow-y-auto">
                                            <div className="flex items-start flex-col justify-between gap-3 pb-2">
                                                {basket?.map((winebasket) => (
                                                    <div
                                                        className="flex flex-row justify-between w-full items-center border-b border-gray-300"
                                                        key={winebasket._id}
                                                    >
                                                        <div className="flex items-center">
                                                            <img
                                                                src={`http://localhost:3000/public/product/${winebasket.productId.images[0]}`}
                                                                alt="Product"
                                                                className="w-[80px] h-[100px] cursor-pointer"
                                                            />
                                                            <div className="flex flex-col gap-2 pl-2">
                                                                <p className="hover:text-red-800 transition-all duration-300">
                                                                    {winebasket.productId.name}
                                                                </p>
                                                                <p className="text-black transition-all duration-300 dark:text-white">
                                                                    QTY: {winebasket.quantity}
                                                                </p>
                                                                <span>${Number(winebasket.productId.price) - Number(winebasket.productId.discount || 0)}</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="ml-auto w-4 transition-all duration-300 hover:text-red-800 cursor-pointer"
                                                            onClick={() =>
                                                                onSubmit(winebasket._id)}
                                                        >
                                                            x
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-start font-semibold text-lg px-6">
                                            {t("Total")}:${basket.reduce((total, winebasket) => {
                                                const productPrice = Number(winebasket.productId.price) - (Number(winebasket.productId.discount) || 0);
                                                return total + (productPrice * Number(winebasket.quantity));
                                            }, 0).toFixed(2)}
                                        </div>
                                        <div className="p-4 border-t uppercase tracking-widest">
                                            <button
                                                onClick={handleCheckout}
                                                className="w-full text-lg px-4 py-2 transition-all duration-300 bg-black text-white rounded hover:bg-primary dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white"
                                            >
                                                {t("Checkout")}
                                            </button>
                                        </div>
                                    </div>
                                )
                            }

                            <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
