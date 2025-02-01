import { ScrollToTop } from "@/components/shared/ScrollToTop"
import { SwiperSlides } from "../home/components/Swiper"
import { WineAbout } from "./components/About"
import { Description } from "./components/Description"
import { Information } from "./components/Information"
import wineService from "@/services/wine"
import { QUERY_KEYS } from "@/constants/query-keys"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Spinner } from "@/components/shared/Spinner"



export const WineProductDetail = () => {
    const { id } = useParams<{ id: string }>()
    const { data: wineList, isLoading: wineLoading } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })
    const products = wineList?.data.items

    const { data: wineDetail, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.WINE_DETAIL, id],
        queryFn: () => wineService.getById(id!)
    })


    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }

    const winedetail = wineDetail?.data?.item


    console.log("winedetail", wineDetail);
    return (
        <div className="bg-white">
            <WineAbout product={winedetail} />
            <Description />
            <Information />
            <div className="border-b border-b-gray-100">
                <SwiperSlides product={products} isLoading={wineLoading} />
            </div>
            <ScrollToTop />
        </div>
    )
}
