import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import basketService from "@/services/basket";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { Basket } from "@/types";
import { selectUserData } from "@/store/features/userSlice";
import { useSelector } from "react-redux";
import queryClient from "@/config/queryClient";
import { useTranslation } from "react-i18next";

type Props = {
    updateBasket: (newProduct: Basket) => void;
    productId: string;
};

export const AddToCart = ({ updateBasket, productId }: Props) => {
    const [quantity, setQuantity] = useState(1);
    const user = useSelector(selectUserData);
    const { openDialog } = useDialog();
    const { t } = useTranslation()
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const { mutate: basketadd } = useMutation({
        mutationFn: basketService.add,
        onSuccess: (newProduct) => {
            toast.success("Wine added to basket.");
            queryClient.invalidateQueries();
            updateBasket(newProduct);
        },
        onError: () => {
            toast.info("The product is already in the basket.");
        },
    });

    function onBasketSubmit(productId: string) {
        if (!user?.user?._id) {
            openDialog(ModalTypeEnum.LOGIN);
            toast.message("Please create an account.");
            return;
        }
        basketadd({ userId: user.user?._id!, productId, quantity });
    }

    return (
        <div>
            <div className="flex items-center gap-5 mt-4">
                <div className="flex items-center rounded-lg shadow-sm bg-white">
                    <button
                        onClick={decreaseQuantity}
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        {quantity}
                    </div>
                    <button
                        onClick={increaseQuantity}
                        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-4 mb-4">
                <button
                    className="w-full h-[55px] text-white bg-primary font-semibold text-sm uppercase hover:bg-black transition-all duration-300 dark:bg-primary"
                    onClick={() => onBasketSubmit(productId)}
                >
                    {t("add to cart")}
                </button>
                <button className="w-full h-[55px] mt-5 text-white bg-black font-semibold text-sm uppercase hover:bg-primary transition-all duration-300 dark:bg-primary">
                    {t("buy it now")}
                </button>
            </div>
        </div>
    );
};
