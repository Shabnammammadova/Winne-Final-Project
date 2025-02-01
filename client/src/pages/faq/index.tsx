import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { FaqAccordion } from "./components/Accordion"
import { FaqHero } from "./components/Hero"
import { Offers } from "./components/Offers"



export const Faq = () => {
    return (
        <div className="bg-white">
            <FaqHero />
            <FaqAccordion />
            <Offers />
            <ScrollToTop />
        </div>
    )
}
