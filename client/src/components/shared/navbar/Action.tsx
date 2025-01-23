import UserIcon from "../../../assets/icons/user.svg"
import HeartIcon from "../../../assets/icons/heart.svg"
import { SearchSide } from "./Search"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"
import { ShoppingCart } from "../shopping"

export const Action = () => {
    return (
        <div className='flex items-center justify-end gap-1  cursor-pointer'>
            <SearchSide />
            <img src={UserIcon} alt="" className="w-[24px] h-[24px]" />
            <Link to={paths.WISHLIST}><img src={HeartIcon} alt="" className='w-[24px] h-[24px] lg:block hidden' /></Link>
            <ShoppingCart />
        </div>
    )
}
