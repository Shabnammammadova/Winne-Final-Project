import { paths } from "@/constants/paths";
import basketService from "@/services/basket";
// import basketService from "@/services/basket";
import favoriteService from "@/services/favorite";
import { selectUserData } from "@/store/features/userSlice";
import { Favorite } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type Props = {
    favorites: Favorite[];
};


export const WishListProducts = ({ favorites }: Props) => {
    const isFavoritesLoaded = favorites && favorites.length > 0;
    const queryClient = useQueryClient();
    const user = useSelector(selectUserData);
    const { mutate } = useMutation({
        mutationFn: favoriteService.remove,
        onSuccess: async () => {
            toast.success("Product removed from favorites!");
            queryClient.invalidateQueries()
        },
        onError: () => {
            toast.error("Failed to remove product from favorites.");
        },
    });

    function onSubmit(id: string) {
        mutate(id);
    }
    // const { mutate: basketadd } = useMutation({
    //     mutationFn: basketService.add,
    //     onSuccess: () => {
    //         toast.success("Wine added to basket.");
    //         queryClient.invalidateQueries()
    //     },
    //     onError: () => {
    //         toast.info("The product is now a basket")
    //     }
    // })
    // function onBasketSubmit(productId: string) {
    //     basketadd({ userId: user.user?._id!, productId });
    // }

    return (
        <div className="py-10 font-sans border-b border-gray-200 dark:bg-black dark:text-white">
            <div className="container">
                <h3 className="text-5xl text-center font-bold tracking-tight">WishList</h3>
                {!isFavoritesLoaded ? (
                    <p className="text-center text-3xl  text-primary font-bold mt-8">Your wishlist is empty.</p>
                ) : (
                    <table className="w-full max-w-[1110px] mx-auto mt-10 border-collapse ">
                        <thead className="border border-solid border-gray-200">
                            <tr>
                                <th className="text-xs tracking-[.2rem] uppercase border-r-gray-200 text-black font-medium py-4 px-5 text-left border-r-2 dark:text-white">
                                    Product Name
                                </th>
                                <th className="text-xs tracking-[.2rem] uppercase text-black font-medium py-4 px-5 border-r-gray-200 text-center border-r-2 dark:text-white">
                                    Price
                                </th>
                                <th className="text-xs tracking-[.2rem] uppercase text-center text-black font-medium py-4 px-5 border-r-gray-200 border-r-2 dark:text-white">
                                    Action
                                </th>
                                <th className="text-xs tracking-[.2rem] uppercase text-center text-black font-medium py-4 px-5 border-black dark:text-white">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border border-solid border-gray-200">
                            {favorites?.map((favorite) => (
                                <tr className="border-b-gray-200 border-b-[1px]" key={favorite._id}>
                                    <td className="p-5 flex items-center gap-4">
                                        <img
                                            src={`http://localhost:3000/public/product/${favorite.productId.images[0]}`}
                                            alt="Product"
                                            className="w-[80px] h-[100px] cursor-pointer"
                                        />
                                        <span className="text-gray-300 xs:text-xs sm:text-base cursor-pointer transition-all duration-300 hover:text-red-800 ">
                                            {favorite.productId.name}
                                        </span>
                                    </td>
                                    <td className="p-2 text-gray-600 dark:text-white text-center">
                                        <span>${Number(favorite.productId.price) - Number(favorite.productId.discount || 0)}</span>
                                    </td>
                                    <td className="p-2 flex items-center gap-4 relative bottom-12">
                                        <button className="bg-black dark:bg-white dark:text-black text-white xs:px-3 md:px-6 xs:py-1 md:py-2 xs:text-xs md:text-sm mx-auto text-center font-medium uppercase tracking-wide transition-all duration-300 hover:bg-primary dark:hover:bg-primary dark:hover:text-white" >
                                            Add to Cart
                                        </button>
                                    </td>
                                    <td className="p-2 text-gray-600 text-center" onClick={() =>
                                        onSubmit(favorite._id)}>
                                        <span className="text-black cursor-pointer text-lg font-bold dark:text-white">
                                            ×
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="mt-8 text-center">
                    <Link to={paths.SHOP}>
                        <button className="bg-black text-white px-8 py-3 text-sm font-medium uppercase transition-all duration-300 tracking-wide hover:bg-primary dark:text-black dark:bg-white dark:hover:bg-primary dark:hover:text-white">
                            Continue Shopping
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

