import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Hero1 from "../../../assets/images/Hero1.webp";
import Hero2 from "../../../assets/images/Hero 2.webp";
import Hero3 from "../../../assets/images/Hero 3.webp";
import Hero4 from "../../../assets/images/Hero4.webp";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import { motion } from "framer-motion";

const slides = [
    {
        image: Hero1,
        title: "Exclusive Red Wine",
        subtitle: "Discover the finest selection of wines, crafted for the perfect sip every time..Rich flavors, unforgettable moments.Each bottle tells a story of passion."
    },
    {
        image: Hero2,
        title: "Crisp White Elegance",
        subtitle: "From bold reds to crisp whites – explore our curated selection of premium wines.Indulge in the artistry of winemaking with every glass."
    },
    {
        image: Hero3,
        title: "Luxury Rosé Collection",
        subtitle: "Each bottle tells a story. Experience the rich flavors of tradition and craftsmanship."
    },
    {
        image: Hero4,
        title: "Crisp Red Elegance",
        subtitle: "Indulge in the artistry of winemaking with every glass.Handpicked from the best vineyards, crafted for true wine lovers."
    }
];

export const HomeHero = () => {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full :h-auto bg-no-repeat bg-contain object-cover block cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute top-1/3 left-[8%] sm:left-[10%] md:left-[12%] lg:left-[15%] z-10 
                            font-medium max-w-[90%] lg:max-w-[50%] 
                            dancing-script text-[32px] italic text-left md:text-left"
                        >
                            <span className="text-[32px] xs:text-[20px] sm:text-[20px] md:text-[35px] lg:text-[40px] font-semibold pb-4 leading-tight">
                                {slide.title}
                            </span>
                            <p className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[14px]  lg:text-[20px] w-full max-w-500 font-medium tracking-[0.5px] pb-4 mt-2 leading-relaxed text-gray-700">
                                {slide.subtitle}
                            </p>
                            <Link to={paths.SHOP}>
                                <button className="bg-black text-white font-medium uppercase tracking-[1.5px] sm:tracking-[2px] 
                                text-sm py-3 sm:py-4 px-6 sm:px-8 border-2 border-black 
                                transition-all ease-in duration-300 hover:bg-transparent hover:text-black">
                                    Shop Now
                                </button>
                            </Link>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
