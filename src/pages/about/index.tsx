import { Cards } from "./components/Cards"
import { AboutHero } from "./components/Hero1"
import { BgHero } from "./components/Hero2"
import { News } from "@/components/shared/news"
import { Story } from "./components/Story"
import { Carousel } from "@/components/shared/carousel"


const About = () => {
    return (
        <div className="bg-white">
            <AboutHero />
            <Story />
            <BgHero />
            <Cards />
            <News />
            <Carousel />
        </div>
    )
}

export default About