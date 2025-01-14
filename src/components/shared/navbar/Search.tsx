import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Search } from "lucide-react"
export function SearchSide() {
    return (
        <div className="transition-all">
            <Sheet>
                <SheetTrigger asChild>
                    <Search className="transition-all" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className="px-[15px] py-[30px]">
                        <SheetTitle className="text-center text-[40px] font-semibold mt-0 leading-5 mb-[1rem] translate-y-0">Start typing and hit Enter</SheetTitle>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>

    )
}
