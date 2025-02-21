import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import Searchbar from "../../../assets/icons/searchbar.svg";
import { SearchProduct } from "./SearchProduct";
import { useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import wineService from "@/services/wine";

let timeoutId: NodeJS.Timeout;

const words = ["Red wine...", "Sparkling wine...", "Discover new collections..."];

export function SearchSide() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const isListingPage = location.pathname.includes("list");

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const currentWord = words[index];

        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex + 1 === currentWord.length) {
                    setIsDeleting(true);
                    setTimeout(() => { }, 1000);
                }
            } else {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, index, isDeleting]);


    useEffect(() => {
        if (location.pathname.includes("/wine/detail/")) {
            searchParams.delete("search");
            setSearchParams(searchParams);
            setOpen(false);
        }
    }, [location.pathname, searchParams, setSearchParams]);

    function handleSearch(searchText: string) {
        clearTimeout(timeoutId);
        if (!searchText) {
            searchParams.delete("search");
            setSearchParams(searchParams);
            return;
        }

        timeoutId = setTimeout(() => {
            searchParams.set("search", searchText);
            setSearchParams(searchParams);
            if (!isListingPage) navigate(paths.HOME + `?${searchParams.toString()}`);
        }, 300);
    }

    const { data: wineList } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({}),
    });
    const products = wineList?.data.items;

    return (
        <div className="transition-all mr-[13px]">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Search className="transition-all" />
                </SheetTrigger>
                <SheetContent className="bg-white dark:bg-black">
                    <SheetHeader className="flex flex-col items-center justify-center w-full max-w-[600px] mx-auto">
                        <div className="flex items-center w-full border-b border-gray-200 pb-2">
                            <input
                                type="text"
                                placeholder={text}
                                className="w-full px-3 py-2 text-sm text-gray-800 outline-none bg-transparent dark:text-white"
                                onChange={(e) => handleSearch(e.target.value.trim())}
                            />
                            <img src={Searchbar} alt="Search Icon" className="w-4 h-4 cursor-pointer ml-2 filter dark:invert" />
                        </div>
                        <div className="w-full mt-4">
                            <SearchProduct product={products} />
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
