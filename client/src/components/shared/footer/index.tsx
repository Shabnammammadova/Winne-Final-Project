import Logo from "../../../assets/images/logo.webp"
import Message from "../../../assets/icons/message.svg"
import Payment from "../../../assets/images/payment.webp"
import { Dribbble, Instagram, Twitter, Youtube } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="bg-white font-sans">
            <div className="container">
                <div className="2xs:flex-col 2xs:gap-16 lg:flex-row flex gap-24">
                    <div className="pt-[50px] 2xs:flex-col 2xs:items-center lg:items-start flex ">
                        <img src={Logo} alt="" className="w-[140px]" />
                        <p className="mt-[23px] text-sm 2xs:text-center lg:text-left text-black">Subscribe our newsletter and get <br />discount 30% off</p>
                        <div className="relative flex flex-row mt-5">
                            <input type="text" className=" leading-[40px] w-[250px] h-[40px] text-[1rem]  px-[.75rem] py-[.375rem] bg-slate-50 outline-none" placeholder="Your email address..." />
                            <button type="submit" className=" absolute  top-0 right-0 bg-black text-white w-[40px] h-[40px] flex items-center justify-center hover:bg-primary"><img src={Message} alt="" className="w-[15px] h-[12px] !text-white !fill-white" /></button>
                        </div>
                        <div className="flex items-center gap-3 mt-[30px] cursor-pointer">
                            <Twitter className="mr-[.5rem] text-black w-[15px] h-4 fill-black hover:text-red-800 hover:fill-red-800" />
                            <Dribbble className="mr-[.5rem] text-black w-[15px] h-4 hover:text-red-800" />
                            <Youtube className="mr-[.5rem] text-black w-[15px] h-4 hover:text-red-800" />
                            <Instagram className="mr-[.5rem] text-black w-[15px] h-4 hover:text-red-800" />
                        </div>
                    </div>
                    <div className="2xs:flex-col 2xs:items-center 2xs:justify-center 2xs:gap-y-20 lg:flex-row flex w-full">
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold">Customer Care</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block"></span>
                            </div>
                            <ul className=" 2xs:text-center lg:text-left text-2xs 2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Pagination</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Terms & Condition</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Contact</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Home page</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Terms of us</a></li>
                            </ul>
                        </div>
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold">Quick Shop</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block"></span>
                            </div>
                            <ul className="2xs:text-center lg:text-left text-2xs 2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Help Center</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Adress Store</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Privacy Policy</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Receivers &  Amplifiers</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Clothings</a></li>
                            </ul>
                        </div>
                        <div className="2xs:text-center text-left 2xs:border-none lg:border-solid lg:border-l-[1px] lg:pb-[40px] lg:pl-[30px] lg:pt-[50px] w-full max-w-[360px]">
                            <h4 className="2xs:text-center lg:text-left text-lg text-gray-900 font-semibold">Company</h4>
                            <div className="2xs:text-center flex 2xs:items-center 2xs:justify-center lg:text-left lg:items-start lg:justify-start">
                                <span className="w-[30px] h-[2px] mt-5 bg-black block"></span>
                            </div>
                            <ul className="2xs:text-center lg:text-left text-2xs  2xs:mt-[10px] lg:mt-[30px] transition-all duration-500 font-sans">
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Delivery</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Lecal Notice</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Documentation</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800">Secure Payment</a></li>
                                <li><a href="" className="text-2xs font-normal leading-[32px] hover:text-red-800 ">Stores</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xs:mt-[60px] lg:mt-0 border-solid py-[26px] border-t-[1px]">
                <div className="container">
                    <div className="xs:flex-col xs:justify-center lg:flex lg:flex-row items-center lg:justify-between">
                        <div className="xs:justify-center xs:text-center flex items-center font-sans text-sm">
                            © Copyright 2025 | Winne By EngoTheme. Powered by Shopify.
                        </div>
                        <div className="xs:flex xs:items-center xs:justify-center">
                            <img src={Payment} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
