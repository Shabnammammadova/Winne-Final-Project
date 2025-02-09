import { Heart } from "lucide-react";
import { Offer } from "./Offer";
import { Delivery } from "./Delivery";
import { AddToCart } from "./AddToCart";
import { Product } from "@/types";


type Props = {
    product: Product
}


export const WineAbout = ({ product = { name: "", price: 0, discount: 0, images: [] } }: Props) => {

    const { name, price, discount, images } = product;
    return (
        <div className="bg-white dark:bg-black">
            <div className="container mx-auto">
                <div className="flex lg:flex-row  lg:items-start 2xs:flex-col 2xs:items-center  pt-5">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <img
                            src={images[0]}
                            alt="Product"
                            className="w-full h-auto max-w-[600px] max-h-[700px] rounded-lg shadow-md mb-4 cursor-pointer"
                            id="mainImage"
                        />
                    </div>
                    <div className="flex flex-col  pl-[20px] w-full max-w-[600px]">
                        <div className="flex">
                            <div className="w-full">
                                <h2 className="text-3xl font-bold mb-2 cursor-pointer">
                                    {name}</h2>
                                <div className="flex items-center gap-1 mb-2 text-lg">
                                    <p className="text-[15px] font-bold text-gray-500 line-through">
                                        ${price}
                                    </p>
                                    <p className="text-[15px] font-bold text-red-800">
                                        ${price - discount}
                                    </p>
                                </div>
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
