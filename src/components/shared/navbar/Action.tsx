import { User } from 'lucide-react';
import { Heart } from "lucide-react"
import { ShoppingBag } from 'lucide-react';
import { SearchSide } from "./Search"
export const Action = () => {
    return (
        <div className='flex items-center justify-end gap-3 cursor-pointer'>
            <SearchSide />
            <User />
            <Heart />
            <ShoppingBag />
        </div>
    )
}
