
export const Offers = () => {
    return (
        <div className="bg-white mx-auto flex flex-col items-center text-center mt-10 pb-10 border-b font-sans px-4">
            <h2 className="text-[30px] font-medium leading-[40px]">
                Never miss our updates about new arrivals and special <br /> offers
            </h2>
            <p className="mt-[22px] text-base">
                Get the latest news & updates
            </p>
            <div className="text-black flex flex-col items-center w-full max-w-[730px]">
                <input
                    type="text"
                    placeholder="EMAIL ADDRESS"
                    className="border-b bg-transparent mt-[40px] mb-5 pb-[16px] outline-none text-xs  border-black border-solid w-full placeholder:text-black"
                />
                <button className="bg-primary text-white text-base py-[14px] font-semibold tracking-[1px] transition-all w-full hover:bg-black">
                    SUBSCRIBE NOW
                </button>
            </div>
        </div>
    );
};