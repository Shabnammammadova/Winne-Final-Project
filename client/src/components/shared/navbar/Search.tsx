import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Search } from "lucide-react"
import Searchbar from "../../../assets/icons/searchbar.svg"
import { SearchProduct } from "./SearchProduct"
import { useNavigate, useSearchParams } from "react-router-dom"
import { paths } from "@/constants/paths"
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import wineService from "@/services/wine"

let timeoutId: NodeJS.Timeout;

export function SearchSide() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const isListingPage = location.pathname.includes("list")

    function handleSearch(searchText: string) {
        clearTimeout(timeoutId);
        if (!searchText) {
            searchParams.delete("search")
            setSearchParams(searchParams)
            return
        }



        timeoutId = setTimeout(() => {
            searchParams.set("search", searchText)
            setSearchParams(searchParams)
            if (!isListingPage) navigate(paths.HOME + `?${searchParams.toString()}`)

        }, 300)
    }


    const { data: wineList } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })
    const products = wineList?.data.items

    return (
        <div className="transition-all mr-[13px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Search className="transition-all" />
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader className="px-[15px] py-[30px] flex flex-col items-center justify-center">
                        <SheetTitle className="text-center xs:text-[25px] md:text-[40px] font-semibold mt-0 leading-5 mb-[1rem] translate-y-0">Start typing and hit Enter</SheetTitle>
                        <div className="flex items-center justify-center px-4 py-3 border-b border-[#e8e8e8] overflow-hidden w-full max-w-[900px]  h-[44px]mx-auto font-[sans-serif] xs:pt-5 md:pt-20">
                            <input type="email" placeholder="Search Something..." className="w-full outline-none text-sm text-black font-sans bg-transparent " onChange={(e) => handleSearch(e.target.value.trim())} />
                            <img src={Searchbar} alt="" className="cursor-pointer hover:fill-red-800" />
                        </div>
                        <SearchProduct product={products} />
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>

    )
}
