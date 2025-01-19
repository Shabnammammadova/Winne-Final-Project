import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Search } from "lucide-react"
import Searchbar from "../../../assets/icons/searchbar.svg"


export function SearchSide() {
    return (
        <div className="transition-all">
            <Sheet>
                <SheetTrigger asChild>
                    <Search className="transition-all" />
                </SheetTrigger>
                <SheetContent className="bg-white">
                    <SheetHeader className="px-[15px] py-[30px] flex flex-col items-center justify-center">
                        <SheetTitle className="text-center text-[40px] font-semibold mt-0 leading-5 mb-[1rem] translate-y-0">Start typing and hit Enter</SheetTitle>
                        <div className="flex items-center justify-center px-4 py-3 border-b border-[#e8e8e8] overflow-hidden w-full max-w-[900px]  h-[44px]mx-auto font-[sans-serif] pt-20">
                            <input type="email" placeholder="Search Something..." className="w-full outline-none text-sm text-black font-sans bg-transparent " />
                            <img src={Searchbar} alt="" className="cursor-pointer hover:fill-red-800" />
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

    )
}
