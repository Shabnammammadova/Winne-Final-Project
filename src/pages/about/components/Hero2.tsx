import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import About3 from "../../../assets/images/about1.3.webp";
import Design from "../../../assets/icons/design.svg";
import Inovation from "../../../assets/icons/inovation.svg";
import Journey from "../../../assets/icons/journey.svg";

export const BgHero = () => {
    return (
        <div className="py-[70px] bg-white">
            <div
                className="relative bg-gradient-to-t h-[532px] w-full bg-cover bg-center bg-fixed mx-auto flex flex-col justify-center"
                style={{ backgroundImage: `url(${About3})` }}
            >
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="lg:w-[1170px] w-full font-sans text-white"
                    >
                        <SwiperSlide>
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src={Design} alt="" className="w-[90px] h-[90px]" />
                                <h2 className="mt-[45px] pb-[15px] text-3xl font-medium">Design</h2>
                                <span className="w-[60px] h-[1.6px] bg-white"></span>
                                <p className="text-[15px] leading-[25px] pt-[15px]">
                                    Praesent metus tellus, elementum eu, semper Vestibulum <br /> volutpat pretium libero
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  justify-center text-center">
                                <img src={Inovation} alt="" className="w-[90px] h-[90px]" />
                                <h2 className="mt-[45px] pb-[15px] text-3xl font-medium">Inovation</h2>
                                <span className="w-[60px] h-[1.6px] bg-white"></span>
                                <p className="text-[15px] leading-[25px] pt-[15px]">
                                    Praesent metus tellus, elementum eu, semper Vestibulum <br /> volutpat pretium libero
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center  justify-center text-center">
                                <img src={Journey} alt="" className="w-[90px] h-[90px]" />
                                <h2 className="mt-[45px] pb-[15px] text-3xl font-medium">Journey</h2>
                                <span className="w-[60px] h-[1.6px] bg-white"></span>
                                <p className="text-[15px] leading-[25px] pt-[15px]">
                                    Praesent metus tellus, elementum eu, semper Vestibulum <br /> volutpat pretium libero
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
