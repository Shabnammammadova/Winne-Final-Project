import SmallProduct from "../../../assets/images/small.png";

export const WishListProducts = () => {
    return (
        <div className="py-10 font-sans border-b border-gray-200">
            <div className="container">
                <h3 className="text-5xl text-center font-bold tracking-tight">WishList</h3>
                <table className="w-full max-w-[1110px] mx-auto mt-10 border-collapse">
                    <thead className="border border-solid border-gray-200">
                        <tr>
                            <th className="text-xs tracking-[.2rem]  uppercase border-r-gray-200 text-black font-medium py-4 px-5 text-left border-r-2">
                                Product Name
                            </th>
                            <th className="text-xs tracking-[.2rem] uppercase text-black font-medium py-4 px-5  border-r-gray-200 text-center border-r-2">
                                Price
                            </th>
                            <th className="text-xs tracking-[.2rem] uppercase text-center text-black font-medium py-4 px-5  border-r-gray-200 border-r-2">
                                Action
                            </th>
                            <th className="text-xs tracking-[.2rem] uppercase text-center text-black font-medium py-4 px-5  border-black ">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="border border-solid border-gray-200 ">
                        <tr className="border-b-gray-200 border-b-[1px]">
                            <td className="p-5  flex items-center gap-4 ">
                                <img
                                    src={SmallProduct}
                                    alt="Product"
                                    className="w-[80px] h-[100px] cursor-pointer"
                                />
                                <span className="text-gray-300 xs:text-xs sm:text-base  cursor-pointer transition-all duration-300 hover:text-red-800">
                                    Alias Secret Red Blend
                                </span>
                            </td>
                            <td className="p-2  text-gray-600">
                                $70.00
                            </td>
                            <td className="p-2  flex items-center gap-4 relative bottom-12">
                                <button className="bg-black text-white xs:px-3 md:px-6 xs:py-1 md:py-2 xs:text-xs md:text-sm  mx-auto text-center font-medium uppercase tracking-wide transition-all duration-300 hover:bg-primary">
                                    Add to Cart
                                </button>
                            </td>
                            <td className="p-2  text-gray-600"><span className="text-black cursor-pointer text-lg font-bold">
                                ×
                            </span></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-8 text-center">
                    <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase transition-all duration-300 tracking-wide hover:bg-primary">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};
