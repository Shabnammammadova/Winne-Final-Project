import { useMemo, useState } from 'react';
import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import BestIcon from "../../../assets/icons/icon-bestseller.svg"
import { useNavigate, useSearchParams } from "react-router-dom";
import { Product } from "@/types";
import basketService from '@/services/basket';
import { useMutation } from '@tanstack/react-query';
import favoriteService from '@/services/favorite';
import { toast } from 'sonner';
import queryClient from '@/config/queryClient';
import { ModalTypeEnum, useDialog } from '@/hooks/useDialog';
import { useSelector } from 'react-redux';
import { selectUserData } from '@/store/features/userSlice';
import { useTranslation } from 'react-i18next';

type Props = {
    product: Product[];
};

export const ShopProducts = ({ product }: Props) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [sortOption, setsortOption] = useState()
    const user = useSelector(selectUserData);
    const { t } = useTranslation()

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

    const [favoriteStatus, setFavoriteStatus] = useState<{ [key: string]: boolean }>({});
    const [basketStatus, setBasketStatus] = useState<{ [key: string]: boolean }>({});
    const { openDialog } = useDialog()



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

    const filteredProducts = useMemo(() => {
        const selectedCategories = searchParams.getAll('category');
        const selectedPrices = searchParams.getAll('price');

        let filtered = product.filter((p) => {
            const matchesCategory = selectedCategories.length
                ? selectedCategories.includes(p.category._id)
                : true;

            const matchesPrice = selectedPrices.length
                ? selectedPrices.some((range) => {
                    const [min, max] = range.split('-').map(Number);
                    return p.price >= min && p.price <= max;
                })
                : true;

            return matchesCategory && matchesPrice;

        });
        if (sortOption === 'alphabetically') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (sortOption === 'high-to-low') {
            filtered.sort((a, b) => b.price - a.price);
        }
        if (sortOption === 'low-to-high') {
            filtered.sort((a, b) => a.price - b.price);
        }
        return filtered;

    }, [product, searchParams, sortOption]);

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='flex items-center gap-3 xs:text-[14px] pt-5 text-black capitalize xl:text-base font-medium dark:text-white cursor-pointer'><img src={BestIcon} alt="" className='w-[26px] h-[26px] uppercase' />{t("BEST SELLERS")}</h1>
                <select name="wine" className='border border-gray-200 rounded-lg px-5 py-3 mt-3 cursor-pointer dark:text-black' value={sortOption} onChange={(e) => setsortOption(e.target.value)}>
                    <option value="" className='cursor-pointer dark:text-black'>{t("Sorting")}</option>
                    <option value="alphabetically" className='cursor-pointer dark:text-black'>{t("Alphabetically, A-Z")}</option>
                    <option value="high-to-low" className='cursor-pointer dark:text-black'>{t("Price,high to low")}</option>
                    <option value="low-to-high" className='cursor-pointer dark:text-black'>{t("Price,low to high")}</option>
                </select>
            </div>

            <div className='border-t border-t-gray-200 mt-9'>
                <section className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2  font-sans pt-6 ">
                    {filteredProducts.length === 0 ? (
                        <div className="text-center m-auto text-2xl font-bold text-black dark:text-white">No products found</div>
                    ) : (
                        filteredProducts.map((wineproduct) => (
                            <div
                                className="cursor-pointer relative group"
                            >
                                <img
                                    src={wineproduct.images[0]}
                                    alt="Product"
                                    className="object-cover pb-[100px]"
                                />
                                <div className="px-4 py-3 bg-white dark:bg-black dark:text-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                                    <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px] dark:text-white">
                                        {t(`products.${wineproduct.name.replace(/\s+/g, "_").toLowerCase()}`)}
                                    </span>

                                    <div className="flex items-center justify-center gap-1">
                                        <p className="text-[15px] font-bold text-gray-500 line-through">
                                            {wineproduct.discount ? `$${wineproduct.price}` : null}
                                        </p>
                                        <p className="text-[15px] font-bold text-red-800">
                                            ${wineproduct.discount ? wineproduct.price - wineproduct.discount : wineproduct.price}
                                        </p>
                                    </div>
                                </div>
                                <ul className="absolute flex gap-1 justify-center items-center bottom-[35%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                                    <div className="flex flex-col items-center relative font-sans">
                                        <li className={`bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline ${basketStatus[wineproduct._id] ? "bg-primary text-white" : "bg-white"
                                            }`} onClick={() => onBasketSubmit(wineproduct._id)} >
                                            <SlBag className="w-[16px] h-[16px] dark:text-black" />
                                        </li>
                                    </div>
                                    <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white" onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                                        key={wineproduct._id}>
                                        <IoSearchOutline
                                            className="w-[16px] h-[16px] dark:text-black"
                                            onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                                        />
                                    </li>
                                    <li className={`bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white ${favoriteStatus[wineproduct._id] ? "bg-primary text-white" : "bg-white"
                                        }`} onClick={() => onFavSubmit(wineproduct._id)}>
                                        <CiHeart className="w-[16px] h-[16px] dark:text-black" />
                                    </li>
                                </ul>
                            </div>
                        ))
                    )}
                </section>
            </div>
        </div>

    );
};


ShopProducts.Skeleton = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-6 mx-auto animate-pulse">
                <div className="grid grid-cols-1 gap-2 mt-8 xl:mt-12 xl:gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-4">
                    <div className="w-full mx-auto text-center">
                        <div className="w-[217px] h-[250px] bg-gray-300 rounded-lg dark:bg-gray-600"></div>
                        <h1 className="w-[125px] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center  mx-auto"></h1>
                        <p className="w-[120px] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 text-center mx-auto"></p>
                    </div>
                </div>
            </div>
        </section>

    )
}
