import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { FaqAccordion } from "./components/Accordion"
import { FaqHero } from "./components/Hero"
import { Offers } from "./components/Offers"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import faqService from "@/services/faq"
import { Spinner } from "@/components/shared/Spinner"
import { RenderIf } from "@/components/shared/RenderIf"



export const Faq = () => {
    const { data: faqlist, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.FAQ],
        queryFn: () => faqService.getAll({})
    })
    const faqs = faqlist?.data.items

    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }


    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <FaqHero />
            <RenderIf condition={isLoading}>
                {
                    [1].map((index) => (
                        <FaqAccordion.Skeleton key={index} />
                    ))
                }
            </RenderIf>
            <RenderIf condition={!isLoading}>
                <FaqAccordion faq={faqs} />
            </RenderIf>

            <Offers />
            <ScrollToTop />
        </div>
    )
}
