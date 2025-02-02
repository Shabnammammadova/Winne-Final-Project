import { Cards } from "./components/Cards"
import { HomeHero } from "./components/Hero1"
import { WineHero } from "./components/Hero2"

import { SocialCard } from "./components/SocialCard"
import { SwiperSlides } from "./components/Swiper"
import { WineProductList } from "@/components/shared/product/ProductList"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import wineService from "@/services/wine"
import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { RenderIf } from "@/components/shared/RenderIf"
import blogService from "@/services/blog"
import { BlogList } from "@/components/shared/blog/BlogList"




const HomePage = () => {
    const { data: wineList } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })
    const products = wineList?.data.items

    const { data: blogList, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.BLOG_LIST],
        queryFn: () => blogService.getAll({})
    })
    const blogs = blogList?.data.items



    return (
        <div>
            <HomeHero />
            <Cards />
            <RenderIf condition={isLoading}>
                {
                    [1].map((index) => (
                        <WineProductList.Skeleton key={index} />
                    ))
                }
            </RenderIf>
            <RenderIf condition={!isLoading}>
                <WineProductList product={products} />
            </RenderIf>
            <WineHero />
            <SwiperSlides product={products} />
            <BlogList blog={blogs} />
            <SocialCard />
            <ScrollToTop />
        </div>
    )
}

export default HomePage