import { Offer } from "./Offer";
import { Delivery } from "./Delivery";
import { AddToCart } from "./AddToCart";
import { Basket, Product } from "@/types";
import { useMutation } from "@tanstack/react-query";
import favoriteService from "@/services/favorite";
import { toast } from "sonner";
import queryClient from "@/config/queryClient";
import { useState } from "react";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { CiHeart } from "react-icons/ci";


type Props = {
    product: Product
}


export const WineAbout = ({ product = { _id: "", name: "", price: 0, discount: 0, images: [] } }: Props) => {
    const user = useSelector(selectUserData);
    const [favoriteStatus, setFavoriteStatus] = useState<{ [key: string]: boolean }>({});
    const { openDialog } = useDialog()
    const [basket, setBasket] = useState<Basket[]>([]);

    const updateBasket = (newProduct: Basket) => {
        setBasket((prevBasket) => [...prevBasket, newProduct]);
    };

    const { mutate: favoriteadd } = useMutation({
        mutationFn: favoriteService.add,
        onSuccess: () => {
            toast.success("Wine added to favorite!");
            queryClient.invalidateQueries();
        },
        onError: () => {
            toast.info("The product is now a favorite.");
        },
    });
    function toggleFavorite(productId: string) {
        setFavoriteStatus((prev) => {
            const newStatus = {
                ...prev,
                [productId]: !prev[productId],
            };
            return newStatus;
        });
    }

    function onFavSubmit(productId: string) {
        if (!user?.user?._id) {
            openDialog(ModalTypeEnum.LOGIN);
            toast.message("Please create an account.")
            return;
        }
        favoriteadd({ userId: user.user?._id!, productId });
        toggleFavorite(productId);
    }
    const { _id, name, price, discount, images } = product;
    return (
        <div className="bg-white dark:bg-black">
            <div className="container mx-auto">
                <div className="flex lg:flex-row  lg:items-start 2xs:flex-col 2xs:items-center  pt-5">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src={images[0]}
                            alt="Product"
                            className="w-full h-auto max-w-[600px] max-h-[700px] rounded-lg shadow-md mb-4 cursor-pointer"
                            id="mainImage"
                        />
                    </div>
                    <div className="flex flex-col  pl-[20px] w-full max-w-[600px]">
                        <div className="flex">
                            <div className="w-full">
                                <h2 className="text-3xl font-bold mb-2 cursor-pointer">
                                    {name}</h2>
                                <div className="flex items-center gap-1 mb-2 text-lg">
                                    <p className="text-[15px] font-bold text-gray-500 line-through">
                                        ${price}
                                    </p>
                                    <p className="text-[15px] font-bold text-red-800">
                                        ${price - discount}
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => onFavSubmit(_id)}
                                className={`p-2 rounded-full transition-all duration-300 ease-in-out w-[40px] h-[40px] 
                                    border-solid border-[1px] border-gray-200 cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white
                                    ${favoriteStatus[_id] ? "bg-primary text-white" : "bg-white text-black"}
                                    hover:bg-primary hover:text-white
                                `}
                            >
                                <CiHeart className={`w-[16px] h-[16px] ${favoriteStatus[_id] ? "text-white" : "text-black dark:text-black"}`} />
                            </div>
                        </div>
                        <p className="border-t-[1px] text-gray-500 text-sm  border-solid border-t-gray-200 pt-4">
                            Wine history Wine is an alcoholic beverage fermented from grapes. The natural chemical balance allows grapes to ferment without the need for added sugars, acids, enzymes, water or other nutrients. Yeast consumes the sugars in the grapes and converts them into alcohol and carbon dioxide. Different grape varieties and different...
                        </p>
                        <Offer />
                        <Delivery />
                        <AddToCart updateBasket={updateBasket} productId={product._id} />
                    </div>
                </div>
            </div>
        </div>
    );
};
