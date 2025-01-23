import { Cards } from "./components/Cards"
import { HomeHero } from "./components/Hero1"
import { WineHero } from "./components/Hero2"
import { HomeBlog } from "./components/Blog"
import { SocialCard } from "./components/SocialCard"
import { SwiperSlides } from "./components/Swiper"
import { WineProductList } from "@/components/shared/product/ProductList"


const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <Cards />
            <WineProductList />
            <WineHero />
            <SwiperSlides />
            <HomeBlog />
            <SocialCard />
        </div>
    )
}

export default HomePage