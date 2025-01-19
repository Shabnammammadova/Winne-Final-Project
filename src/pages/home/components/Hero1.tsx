import { useState } from "react";
import Hero1 from "../../../assets/images/Hero1.webp";
import Hero2 from "../../../assets/images/Hero 2.webp";

export const HomeHero = () => {
    const images = [Hero1, Hero2];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative w-full">
            <div className="relative top-[80px] xs:top-[80px]">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-auto bg-no-repeat bg-contain object-cover block cursor-pointer"
                />
                <div className="absolute top-1/2 left-[5%] xs:left-[8%] sm:left-[10%] md:left-[14%] translate-y-[-50%] z-10 font-sans capitalize max-w-[90%] lg:max-w-[50%]">
                    <p className="text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] font-medium tracking-[3px] sm:tracking-[4px] text-gray-700">
                        Maybe you need
                    </p>
                    <span className="text-[32px] xs:text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] font-semibold pb-4 leading-tight">
                        privileged wine
                    </span>
                    <p className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-[0.5px] pb-4 leading-relaxed text-gray-700">
                        Try Our Exclusive Wine Varieties.
                    </p>
                    <button className="bg-black border-black text-white mt-4 sm:mt-6 md:mt-8 font-medium uppercase tracking-[1.5px] sm:tracking-[2px] text-xs sm:text-sm py-[8px] xs:py-[10px] md:py-[15px] px-[20px] xs:px-[30px] md:px-[40px] border-solid transition-all ease-in duration-300 hover:bg-transparent hover:text-black hover:border-black border-2">
                        Shop Now
                    </button>
                </div>
                <div className="flex justify-center items-center mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 mx-1 rounded-full border-gray-400 border-2 ${index === currentIndex ? "bg-gray-400" : "bg-transparent"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};
