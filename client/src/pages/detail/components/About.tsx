import Winne1 from "../../../assets/images/winne1.webp"
import { Heart } from "lucide-react";
import { Offer } from "./Offer";
import { Delivery } from "./Delivery";
import { AddToCart } from "./AddToCart";
export const WineAbout = () => {


    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="flex lg:flex-row  lg:items-start 2xs:flex-col 2xs:items-center  pt-5">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src={Winne1}
                            alt="Product"
                            className="w-full h-auto max-w-[600px] max-h-[600px] rounded-lg shadow-md mb-4"
                            id="mainImage"
                        />
                    </div>
                    <div className="flex flex-col  pl-[20px] w-full max-w-[600px]">
                        <div className="flex">
                            <div className="w-full">
                                <h2 className="text-3xl font-bold mb-2 cursor-pointer">
                                    Heavyweight Cabernet Sauv</h2>
                                <p className="text-red-800 font-bold mb-4">$65.00 USD</p>
                            </div>
                            <div className="bg-white p-2 rounded-full transition-all duration-300 ease-in-out w-[40px] h-[40px] hover:bg-primary border-solid border-[1px] border-gray-200 cursor-pointer flex items-center justify-center hover:text-white">
                                <Heart className=" w-[16px] h-[16px] " />
                            </div>
                        </div>
                        <p className="border-t-[1px] text-gray-500 text-sm  border-solid border-t-gray-200 pt-4">
                            Wine history Wine is an alcoholic beverage fermented from grapes. The natural chemical balance allows grapes to ferment without the need for added sugars, acids, enzymes, water or other nutrients. Yeast consumes the sugars in the grapes and converts them into alcohol and carbon dioxide. Different grape varieties and different...
                        </p>
                        <Offer />
                        <Delivery />
                        <AddToCart />
                    </div>
                </div>
            </div>
        </div>
    );
};
