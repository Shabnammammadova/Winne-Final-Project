import { useState } from "react";
import ShoppingIcon from "../../../assets/icons/shoppingbag.svg"
import SmallProduct from "../../../assets/images/small.png";
import { Trash } from "lucide-react";


export function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button onClick={handleOpen}>
                <img src={ShoppingIcon} alt="" className='w-[24px] h-[24px]' />
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-end font-sans">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={handleClose}
                    ></div>
                    <div className="relative w-[300px] sm:w-[400px] h-full bg-white shadow-lg">
                        <div className="p-4 border-b">
                            <h2 className="text-2xl text-center font-semibold">Shopping Cart</h2>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <div className="flex items-center justify-between pb-2  border-b border-gray-300">
                                <div className="flex flex-row items-center">
                                    <img
                                        src={SmallProduct}
                                        alt="Product"
                                        className="w-[80px] h-[100px] cursor-pointer"
                                    />
                                    <div className="flex flex-col gap-2 pl-2">
                                        <p className="hover:text-red-800 transition-all duration-300">Alias Secret Red Blend</p>
                                        <span>$70.00</span>
                                    </div>
                                </div>
                                <div><Trash className="w-4 transition-all duration-300 hover:text-red-800 " /></div>
                            </div>

                        </div>
                        <div className="p-4 border-t uppercase tracking-widest relative">
                            <button
                                onClick={handleClose}
                                className="w-full text-lg  px-4 py-2 bg-black text-white rounded hover:bg-primary"
                            >
                                Checkout
                            </button>
                        </div>
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
