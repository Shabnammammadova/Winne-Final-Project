import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import favoriteService from "@/services/favorite";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { useState, useEffect } from "react";
import basketService from "@/services/basket";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";



type Props = {
    product: Product[];
};

export const WineProductList = ({ product }: Props) => {
    const user = useSelector(selectUserData);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

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

    const { mutate: basketadd } = useMutation({
        mutationFn: basketService.add,
        onSuccess: () => {
            toast.success("Wine added to basket.");
            queryClient.invalidateQueries()
        },
        onError: () => {
            toast.info("The product is now a basket")
        }
    })

    const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [favoriteStatus, setFavoriteStatus] = useState<{ [key: string]: boolean }>({});
    const [basketStatus, setBasketStatus] = useState<{ [key: string]: boolean }>({});
    const { openDialog } = useDialog()

    useEffect(() => {
        if (product && product.length > 0) {
            setVisibleProducts(product.slice(0, 4));
            setHasMore(product.length > 4);
        }
    }, [product]);

    const loadMoreProducts = () => {
        const newVisibleProducts = product.slice(0, visibleProducts.length + 4);
        setVisibleProducts(newVisibleProducts);
        if (newVisibleProducts.length >= product.length) {
            setHasMore(false);
        }
    };

    function onFavSubmit(productId: string) {
        if (!user?.user?._id) {
            openDialog(ModalTypeEnum.LOGIN);
            toast.message("Please create an account.")
            return;
        }
        favoriteadd({ userId: user.user?._id!, productId });
        toggleFavorite(productId);
    }

    function onBasketSubmit(productId: string) {
        if (!user?.user?._id) {
            openDialog(ModalTypeEnum.LOGIN);
            toast.message("Please create an account.")
            return;
        }
        basketadd({ userId: user.user?._id!, productId });
        toggleBasket(productId)
    }
    function toggleFavorite(productId: string) {
        setFavoriteStatus((prev) => {
            const newStatus = {
                ...prev,
                [productId]: !prev[productId],
            };
            return newStatus;
        });
    }
    function toggleBasket(productId: string) {
        setBasketStatus((prev) => {
            const newStatus = {
                ...prev,
                [productId]: !prev[productId],
            };
            return newStatus;
        });
    }

    return (
        <div className="bg-white dark:bg-black dark:text-white w-full">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">
                    Best Seller
                </p>
                <span className="border-red-800 border-2 w-[75px]"></span>
                <span className="text-[17px] font-medium pt-5 text-gray-500">
                    Best Seller Product This Week!
                </span>
            </div>
            <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2 mt-[38px] font-sans">
                {visibleProducts.map((wineproduct) => (
                    <div key={wineproduct._id} className="cursor-pointer relative group">
                        <img
                            src={wineproduct.images[0]}
                            alt="Product"
                            className="object-cover pb-[100px]"
                            onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                        />
                        <div className="px-4 py-3 bg-white dark:bg-black text-center h-[100px] absolute left-0 bottom-0 w-full">
                            <span className="xs:text-[14px] text-black dark:text-white capitalize xl:text-base font-medium pt-5 pb-[10px]">
                                {wineproduct.name}
                            </span>
                            <div className="flex items-center justify-center gap-1">
                                <p className="text-[15px] font-bold text-gray-500 line-through">
                                    ${wineproduct.price}
                                </p>
                                <p className="text-[15px] font-bold text-red-800">
                                    ${wineproduct.price - wineproduct.discount}
                                </p>
                            </div>
                        </div>

                        <ul className="absolute flex gap-4 justify-center items-center bottom-[30%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                            <div className="flex flex-col items-center relative font-sans">
                                <li onClick={() => onBasketSubmit(wineproduct._id)} className={`p-2 rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-white ${basketStatus[wineproduct._id] ? "bg-primary text-white" : "bg-white"
                                    }`}>
                                    <SlBag className="w-[20px] h-[20px] dark:text-black" />
                                </li>
                            </div>
                            <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                <IoSearchOutline
                                    className="w-[20px] h-[20px] dark:text-black"
                                    onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                                />
                            </li>
                            <li
                                onClick={() => onFavSubmit(wineproduct._id)}
                                className={`p-2 rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-white ${favoriteStatus[wineproduct._id] ? "bg-primary text-white" : "bg-white"
                                    }`}
                            >

                                <CiHeart
                                    className={`w-[20px] h-[20px] ${favoriteStatus[wineproduct._id] ? "text-white" : "dark:text-black"
                                        }`}
                                />
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
            {hasMore && (
                <button
                    onClick={loadMoreProducts}
                    className="text-white text-center font-sans flex items-center justify-center mx-auto p-2 relative bottom-6 bg-primary rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4">
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                    View more
                </button>
            )}
        </div>
    );
};





WineProductList.Skeleton = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto animate-pulse">
                <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
                <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                    <div className="w-full">
                        <div className="w-[330px] h-[412px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></h1>
                        <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                </div>
            </div>
        </section>

    )
}
