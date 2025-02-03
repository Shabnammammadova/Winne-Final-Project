import React, { useState } from 'react';
import { SlBag } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types";
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
    product: Product[];
};

export const ShopProducts = ({ product }: Props) => {
    const navigate = useNavigate();

    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const productsPerPage = 4;
    const loadMoreProducts = () => {
        if (loading) return;
        setLoading(true);

        const nextBatch = product.slice(currentProducts.length, currentProducts.length + productsPerPage);
        setCurrentProducts((prev) => [...prev, ...nextBatch]);
        setLoading(false);
    };
    React.useEffect(() => {
        loadMoreProducts();
    }, []);

    return (
        <div>
            <InfiniteScroll
                dataLength={currentProducts.length}
                next={loadMoreProducts}
                hasMore={currentProducts.length < product.length}
                loader={<div className="text-center mt-4">Loading...</div>}
                endMessage={<div className="text-center mt-4">You have seen all the products</div>}
                scrollThreshold={0.9}
                scrollableTarget="scrollable-div"
            >
                <section className="mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center items-center gap-x-2 lg:gap-x-8 md:gap-x-2 mt-[38px] font-sans">
                    {currentProducts?.map((wineproduct) => (
                        <div className="cursor-pointer relative group" onClick={() => navigate(`/detail/${wineproduct._id}`)} key={wineproduct._id}>
                            <img
                                src={wineproduct.images[0]}
                                alt="Product"
                                className="object-cover pb-[100px]"
                            />
                            <div className="px-4 py-3 bg-white text-center h-[100px] absolute left-0 bottom-0 w-full">
                                <span className="xs:text-[14px] text-black capitalize xl:text-base font-medium pt-5 pb-[10px]">
                                    {wineproduct.name}
                                </span>
                                <p className="text-[15px] font-bold text-red-800">${wineproduct.price}</p>
                            </div>
                            <ul className="absolute flex gap-1 justify-center items-center bottom-[35%] left-1/2 transform -translate-x-1/2 translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
                                <div className="flex flex-col items-center relative font-sans">
                                    <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:inline">
                                        <SlBag className="w-[16px] h-[16px]" />
                                    </li>
                                </div>
                                <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    <IoSearchOutline className="w-[16px] h-[16px]" onClick={() => navigate(`/detail/${wineproduct._id}`)} />
                                </li>
                                <li className="bg-white p-2 rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-primary hover:text-white">
                                    <CiHeart className="w-[16px] h-[16px]" />
                                </li>
                            </ul>
                        </div>
                    ))}
                </section>
            </InfiniteScroll>
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
