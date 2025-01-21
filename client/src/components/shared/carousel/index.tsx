import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Instagram1 from "../../../assets/images/instagram1.webp";
import Instagram2 from "../../../assets/images/instagram2.webp";
import Instagram3 from "../../../assets/images/instagram3.webp";
import Instagram4 from "../../../assets/images/instagram4.webp";
import Instagram5 from "../../../assets/images/instagram5.webp";
import Instagram6 from "../../../assets/images/instagram6.webp";
import Instagram7 from "../../../assets/images/instagram7.webp";
import InstagramIcon from "../../../assets/icons/instagram.svg";
import { useState } from "react";

const images = [
    Instagram1,
    Instagram2,
    Instagram3,
    Instagram4,
    Instagram5,
    Instagram6,
    Instagram7
];

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? prevIndex : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };


    return (
        <div className="relative w-full">
            <div className="flex overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500 cursor-pointer ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 304}px)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative group w-[304px] h-[304px] overflow-hidden"
                        >
                            <img
                                src={image}
                                alt=""
                                className="w-full h-full transition-transform ease-in duration-1000 group-hover:scale-125 transform-origin-center"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-1000 group-hover:bg-opacity-70 group-hover:flex hidden flex-col items-center justify-center">
                                <Instagram className="w-[40px] h-[40px] text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white disabled:bg-opacity-60"
                disabled={currentIndex === 0}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>


            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white disabled:bg-opacity-60"
                disabled={currentIndex === images.length - 1}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
            <div className="w-[246px] h-[52px] bg-white absolute top-1/3  left-0 right-0 mx-auto font-sans ">
                <div className="flex items-center justify-center gap-3  text-center">
                    <img src={InstagramIcon} alt="" className="w-[28px] h-[28px]" />
                    <p className="text-black text-base leading-[52px]">Follow Us On Instagram</p>
                </div>
            </div>
        </div>
    );
};


