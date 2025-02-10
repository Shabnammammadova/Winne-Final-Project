import { useState } from "react";
import ShoppingIcon from "../../../assets/icons/shoppingbag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Basket } from "@/types";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";


type Props = {
    basket: Basket[]
}

export function ShoppingCart({ basket }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const isBasketLoaded = basket && basket.length > 0;
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button onClick={handleOpen}>
                <img src={ShoppingIcon} alt="" className="w-[24px] h-[24px]" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={handleClose}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className="fixed top-0 right-0 z-50 w-[300px] sm:w-[400px] h-full bg-white dark:bg-black shadow-lg"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="p-4 border-b">
                                <h2 className="text-2xl text-center font-semibold">Shopping Cart</h2>
                            </div>
                            {
                                !isBasketLoaded ? (
                                    <div className="flex flex-col items-center justify-center gap-2 mx-auto absolute top-1/3 w-full">
                                        <p className="text-center text-xl  text-black font-bold mt-8">Your shopping bag is empty.</p>
                                        <Link to={paths.SHOP}><button className="text-sm font-semibold text-white bg-black hover:bg-primary uppercase tracking-[.2em] px-[10px] py-[10px]">Go to the shop</button></Link>
                                    </div>
                                )
                                    : (
                                        <div>
                                            <div className="p-4 flex flex-col gap-4">
                                                <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                                                    {
                                                        basket?.map((winebasket) => (
                                                            <div className="flex flex-row items-center" key={winebasket._id}>
                                                                <img
                                                                    src={`http://localhost:3000/public/product/${winebasket.productId.images[0]}`}
                                                                    alt="Product"
                                                                    className="w-[80px] h-[100px] cursor-pointer"
                                                                />
                                                                <div className="flex flex-col gap-2 pl-2">
                                                                    <p className="hover:text-red-800 transition-all duration-300">
                                                                        {winebasket.productId.name}
                                                                    </p>
                                                                    <p className="text-black transition-all duration-300 dark:text-white">
                                                                        QTY: {winebasket.quantity}
                                                                    </p>
                                                                    <span>${winebasket.productId.price}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }

                                                    <div>
                                                        <div className="w-4 transition-all duration-300 hover:text-red-800">x</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 border-t uppercase tracking-widest relative">
                                                <button
                                                    onClick={handleClose}
                                                    className="w-full text-lg px-4 py-2 transition-all duration-300 bg-black text-white rounded hover:bg-primary dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white"
                                                >
                                                    Checkout
                                                </button>
                                            </div>

                                        </div>

                                    )
                            }
                            <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
