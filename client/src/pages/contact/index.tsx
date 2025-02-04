import { News } from "@/components/shared/news"
import { ContactHero } from "./components/Hero"
import { Carousel } from "@/components/shared/carousel"
import { Location } from "./components/Location"
import { Map } from "./components/Map"
import { ScrollToTop } from "@/components/shared/ScrollToTop"


export const Contact = () => {
    return (
        <div className="bg-white dark:bg-black">
            <ContactHero />
            <Map />
            <Location />
            <News />
            <Carousel />
            <ScrollToTop />
        </div>
    )
}
