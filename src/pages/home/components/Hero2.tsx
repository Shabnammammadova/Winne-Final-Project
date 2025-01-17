import Hero3 from "../../../assets/images/Hero3.webp";

export const WineHero = () => {


    return (
        <div className="relative w-full">
            <div className="relative">
                <img
                    src={Hero3}
                    alt="wineheroimage"
                    className="w-full h-auto bg-no-repeat bg-contain object-cover block cursor-pointer"
                />
                <div className="absolute top-1/2 left-[4%] xs:left-[4%] sm:left-[5%] md:left-[6%] translate-y-[-50%] z-10 font-sans capitalize max-w-[90%] lg:max-w-[50%]">
                    <span className="text-[16px] xs:text-[24px] sm:text-[24px] md:text-[35px] lg:text-[45px] font-semibold pb-4 leading-tight">
                        Luxury Wine From France
                    </span>
                    <p className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[17px] font-normal tracking-[0.5px] pb-4 leading-relaxed text-black xs:w-[300px] sm:w-[450px] md:w-[620px]">
                        Wine is an alcoholic beverage fermented from grapes. The natural chemical
                        balance allows grapes to ferment without added sugar
                    </p>
                    <button className="bg-black border-black text-white mt-2 sm:mt-2 md:mt-2 font-medium uppercase tracking-[1.5px] sm:tracking-[2px] text-xs sm:text-sm py-[8px] xs:py-[10px] md:py-[9px] px-[20px] xs:px-[30px] md:px-[30px] border-solid transition-all ease-in duration-300 hover:bg-transparent hover:text-black hover:border-white hover:bg-white border-2">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};
