import { Cards } from "./components/Cards"
import { AboutHero } from "./components/Hero1"
import { BgHero } from "./components/Hero2"
import { News } from "@/components/shared/news"
import { Story } from "./components/Story"


const About = () => {
    return (
        <div>
            <AboutHero />
            <Story />
            <BgHero />
            <Cards />
            <News />
        </div>
    )
}

export default About