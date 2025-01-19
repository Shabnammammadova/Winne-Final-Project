import { ProductList } from "@/components/shared/product/ProductList"
import { Cards } from "./components/Cards"
import { HomeHero } from "./components/Hero1"
import { WineHero } from "./components/Hero2"
import { HomeBlog } from "./components/Blog"
import { SocialCard } from "./components/SocialCard"
import { SwiperSlides } from "./components/Swiper"


const HomePage = () => {
    return (
        <div>
            <HomeHero />
            <Cards />
            <ProductList />
            <WineHero />
            <SwiperSlides />
            <HomeBlog />
            <SocialCard />
        </div>
    )
}

export default HomePage