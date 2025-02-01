import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { WishlistHero } from "./components/Hero"
import { WishListProducts } from "./components/products"


export const WishList = () => {
    return (
        <div className="bg-white">
            <WishlistHero />
            <WishListProducts />
            <ScrollToTop />
        </div>
    )
}
