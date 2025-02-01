import { Cards } from "./components/Cards"
import { HomeHero } from "./components/Hero1"
import { WineHero } from "./components/Hero2"
import { HomeBlog } from "./components/Blog"
import { SocialCard } from "./components/SocialCard"
import { SwiperSlides } from "./components/Swiper"
import { WineProductList } from "@/components/shared/product/ProductList"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import wineService from "@/services/wine"



const HomePage = () => {
    const { data: wineList, } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })



    const products = wineList?.data.items
    return (
        <div>
            <HomeHero />
            <Cards />
            <WineProductList product={products} />
            <WineHero />
            <SwiperSlides product={products} />
            <HomeBlog />
            <SocialCard />
        </div>
    )
}

export default HomePage