import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { WishlistHero } from "./components/Hero"
import { WishListProducts } from "./components/products"
import favoriteService from "@/services/favorite"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import { Spinner } from "@/components/shared/Spinner"


export const WishList = () => {
    const { data: favoriteList, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.WISHLIST],
        queryFn: () => favoriteService.getAll()
    })
    if (isLoading) {
        return (
            <Spinner />
        )
    }
    const favorites = favoriteList?.data.items
    console.log("favoriteList", favoriteList);

    return (
        <div className="bg-white">
            <WishlistHero />
            <WishListProducts favorites={favorites} />
            <ScrollToTop />
        </div>
    )
}
