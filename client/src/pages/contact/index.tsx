import { News } from "@/components/shared/news"
import { ContactHero } from "./components/Hero"
import { Carousel } from "@/components/shared/carousel"
import { Location } from "./components/Location"
import { Map } from "./components/Map"


export const Contact = () => {
    return (
        <div className="bg-white">
            <ContactHero />
            <Map />
            <Location />
            <News />
            <Carousel />
        </div>
    )
}
