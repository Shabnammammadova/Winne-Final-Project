import { ProductList } from "@/components/shared/product/ProductList"
import { Cards } from "./components/Cards"
import { Hero } from "./components/Hero1"
import { WineHero } from "./components/Hero2"
import { HomeBlog } from "./components/Blog"
import { SocialCard } from "./components/SocialCard"
// import { SwiperSlide } from "./components/Swiper"



const HomePage = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <ProductList />
            <WineHero />
            {/* <SwiperSlide /> */}
            <HomeBlog />
            <SocialCard />
        </div>
    )
}

export default HomePage