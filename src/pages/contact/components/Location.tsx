import AdressIcon from "../../../assets/icons/adress.svg"
import PhoneIcon from "../../../assets/icons/phone.svg"
import LetterIcon from "../../../assets/icons/letter.svg"
import ClockIcon from "../../../assets/icons/clock.svg"


export const Location = () => {
    return (
        <div className="bg-white ">
            <div className="container  mt-[100px] mb-[100px] grid xs:grid-cols-1 md:grid-cols-2  gap-y-2">
                <div className="font-sans flex flex-col w-full px-[40px]">
                    <h2 className="pb-[15px] text-[34px] font-medium">Contact Us</h2>
                    <p className="text-[15px] leading-5">If you would like to know more about our policies, you can consult our Terms and Conditions. You will also be able to follow your order (tracking number will be provided in an e-mail after ordering). You wish to return some items? <span className="text-red-800 cursor-pointer">Click here.</span></p>
                    <div className="mt-5 flex flex-col">
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <img src={AdressIcon} alt="" className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px]">Address</h3>
                                <p className="text-[15px] leading-5 text-gray-400">
                                    The Wine House
                                    2311 Cotner Avenue
                                    Los Angeles, CA 90064-1877
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <img src={PhoneIcon} alt="" className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px]">Phone</h3>
                                <p className="text-[15px] leading-5 text-gray-400">
                                    (310) 479-3731
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <img src={LetterIcon} alt="" className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px]">Email</h3>
                                <p className="text-[15px] leading-5 text-gray-400">
                                    wine@winehouse.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-8 mb-[30px]">
                            <img src={ClockIcon} alt="" className="w-[30px] h-[30px] " />
                            <div>
                                <h3 className="text-[18px] leading-[18px] font-medium mb-[10px]">Open Hours</h3>
                                <div className="flex flex-col">
                                    <p className="text-[15px] leading-5 text-gray-400">
                                        Monday to Friday 09:30 - 17:30
                                    </p>
                                    <p className="text-[15px] leading-5 text-gray-400">
                                        Saturday & Sunday 10:00 - 15:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full px-[20px]">
                    <h2 className="pb-[15px] text-[34px] font-medium">Send us an message</h2>
                    <div className="flex items-center flex-col w-full">
                        <form action="" className="mt-[40px]">
                            <input type="text" placeholder="Your name..." className="w-full h-[60px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none " />
                            <input type="text" placeholder="Your mail..." className="w-full h-[60px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none " />
                            <textarea name="" id="" className="w-full h-[260px] text-xs  leading-[60px] py-[10px] px-[20px] mb-5 border-solid border-[1px] border-gray-200 outline-none"></textarea>
                            <button className="w-full text-lg bg-black text-white uppercase font-semibold leading-[60px]  px-[65px] mb-5 transition-all duration-300 outline-none hover:bg-primary">
                                Send
                            </button>
                        </form>
                    </div>
                </div>




            </div>
        </div>
    )
}
