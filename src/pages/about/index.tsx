import { Cards } from "./components/Cards"
import { AboutHero } from "./components/Hero1"
import { BgHero } from "./components/Hero2"
import { Story } from "./components/Story"


const About = () => {
    return (
        <div>
            <AboutHero />
            <Story />
            <BgHero />
            <Cards />
        </div>
    )
}

export default About