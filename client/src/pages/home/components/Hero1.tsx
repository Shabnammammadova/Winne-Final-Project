import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero1 from "../../../assets/images/Hero1.webp";
import Hero2 from "../../../assets/images/Hero 2.webp";
import Hero3 from "../../../assets/images/Hero 3.webp";
import Hero4 from "../../../assets/images/Hero4.webp";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export const HomeHero = () => {
    const { t } = useTranslation();

    const slides = t("slides", { returnObjects: true });

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                {slides?.map((slide: { image: string; title: string; subtitle: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <img
                            src={[Hero1, Hero2, Hero3, Hero4][index]}
                            alt={`Slide ${index}`}
                            className="w-full h-auto bg-no-repeat bg-contain object-cover block cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute xs:top-[5%] lg:top-1/3 left-[8%] sm:left-[10%] md:left-[12%] lg:left-[15%] z-10 
                            font-medium max-w-[90%] lg:max-w-[50%] 
                            dancing-script text-[32px] italic text-left md:text-left"
                        >
                            <span className="text-[32px] xs:text-[20px] sm:text-[20px] md:text-[35px] lg:text-[40px] font-semibold pb-4 leading-tight text-black">
                                {slide.title}
                            </span>
                            <p className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[14px]  lg:text-[20px] w-full max-w-500 font-medium tracking-[0.5px] pb-4 mt-2 leading-relaxed text-black">
                                {slide.subtitle}
                            </p>
                            <Link to={paths.SHOP}>
                                <button className="bg-black text-white font-medium uppercase tracking-[1.5px] sm:tracking-[2px] 
                                text-sm py-3 sm:py-4 px-6 sm:px-8 border-2 border-black 
                                transition-all ease-in duration-300 hover:bg-transparent hover:text-black">
                                    {t("shop now")}
                                </button>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
