import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Product } from "@/types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


type Props = {
    product: Product[]
}

export const SwiperSlides = ({ product }: Props) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className="bg-white dark:bg-black dark:text-white w-full">
            <div className="flex justify-center items-center flex-col pt-[70px] font-sans">
                <p className="text-2xl font-medium pb-2 tracking-[1px] uppercase">
                    {t("new arrivals")}
                </p>
                <span className="border-red-800 border-2 w-[75px]"></span>
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="container mx-auto mt-[38px] font-sans"
            >
                {product?.map((wineproduct, index) => (
                    <SwiperSlide key={index} className="cursor-pointer relative group">
                        <img
                            src={wineproduct.images[0]}
                            alt="Product"
                            className="object-cover pb-[100px]"
                            onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}
                        />
                        <div className="px-4 py-3 bg-white dark:bg-black text-center h-[100px] absolute left-0 bottom-0 w-full">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


SwiperSlides.Skeleton = function () {
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
