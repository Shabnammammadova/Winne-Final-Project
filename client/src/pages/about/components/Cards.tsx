import { Swiper, SwiperSlide } from 'swiper/react';
import About4 from "../../../assets/images/about1.4.webp"
import About5 from "../../../assets/images/about1.5.webp"
import About6 from "../../../assets/images/about1.6.webp"
import About7 from "../../../assets/images/about1.7.webp"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';


export const Cards = () => {
    const { t } = useTranslation()
    return (
        <div className='bg-white dark:bg-black dark:text-white'>
            <div className="text-black  font-sans flex flex-col items-center justify-center text-center mx-auto dark:text-white">
                <h2 className="text-[55px] font-medium mb-[.5rem] leading-[1.2] capitalize">{t("behind the brands")}</h2>
                <p className="max-w-[1170px] font-normal text-[1rem]">
                    {t("We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.")}</p>
                <span className="w-[50px] h-[1.6px] bg-primary mt-[20px]"></span>
            </div>
            <div className="container mt-10 max-w-[1170px] grid grid-col-3">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={4}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 3 }
                    }}
                    className="max-w-[1170px] w-full font-sans text-white"
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='relative group'>
                                <img src={About4} alt="" className="w-[360px] h-[395px] cursor-pointer  transition-transform duration-500 ease-in-out bg-black opacity-100 group-hover:filter group-hover:brightness-50" />
                                <div className='absolute items-center justify-between gap-3  mx-auto top-[45%] left-[20%] fill-gray-300 hidden group-hover:flex'>
                                    <Facebook className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Twitter className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Instagram className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                    <Youtube className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                </div>
                            </div>
                            <h2 className=" text-black my-[.5rem] text-[22px] font-medium hover:text-red-800 cursor-pointer dark:text-white hover:dark:text-primary">Adrian Stone</h2>
                            <p className="text-[16px] text-gray-400 capitalize">
                                {t("ceo")}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='relative group'>
                                <img src={About5} alt="" className="w-[360px] h-[395px] cursor-pointer transition-transform duration-500 ease-in-out bg-black opacity-100 group-hover:filter group-hover:brightness-50" />
                                <div className='absolute items-center justify-between gap-3  mx-auto top-[45%] left-[20%] fill-gray-300 hidden group-hover:flex'>
                                    <Facebook className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Twitter className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Instagram className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                    <Youtube className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                </div>
                            </div>
                            <h2 className=" text-black my-[.5rem] text-[22px] font-medium hover:text-red-800 cursor-pointer dark:text-white hover:dark:text-primary">Ferguson</h2>
                            <p className="text-[16px] text-gray-400 capitalize">
                                {t("designer")}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='relative group'>
                                <img src={About6} alt="" className="w-[360px] h-[395px] cursor-pointer transition-transform duration-500 ease-in-out bg-black opacity-100 group-hover:filter group-hover:brightness-50" />
                                <div className='absolute items-center justify-between gap-3  mx-auto top-[45%] left-[20%] fill-gray-300 hidden group-hover:flex'>
                                    <Facebook className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Twitter className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Instagram className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                    <Youtube className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                </div>
                            </div>
                            <h2 className=" text-black my-[.5rem] text-[22px] font-medium hover:text-red-800 cursor-pointer dark:text-white hover:dark:text-primary">Saga Noren</h2>
                            <p className="text-[16px] text-gray-400 capitalize">
                                {t("developer")}
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className='relative group'>
                                <img src={About7} alt="" className="w-[360px] h-[395px] cursor-pointer  transition-transform duration-500 ease-in-out bg-black opacity-100 group-hover:filter group-hover:brightness-50" />
                                <div className='absolute items-center justify-between gap-3  mx-auto top-[45%] left-[20%] fill-gray-300 hidden group-hover:flex'>
                                    <Facebook className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Twitter className='p-[12px] text-[2px] fill-gray-400 bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer hover:fill-white hover:bg-primary hover:text-white' />
                                    <Instagram className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                    <Youtube className='p-[12px] text-[2px]  bg-white text-gray-400 w-[40px] h-[40px] cursor-pointer  hover:bg-primary hover:text-white' />
                                </div>
                            </div>
                            <h2 className=" text-black my-[.5rem] text-[22px] font-medium hover:text-red-800 cursor-pointer dark:text-white hover:dark:text-primary">Karen Ryan</h2>
                            <p className="text-[16px] text-gray-400 capitalize">
                                {t("developer")}
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
