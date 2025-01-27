import HeartIcon from "../../../assets/icons/heart.svg"
import { SearchSide } from "./Search"
import { Link, useNavigate } from "react-router-dom"
import { paths } from "@/constants/paths"
import { ShoppingCart } from "../shopping"
import { UserDropdown } from "./User"

export const Action = () => {
    const navigate = useNavigate()
    return (
        <div className='flex items-center justify-end  cursor-pointer'>
            <SearchSide />
            <UserDropdown />
            <button className="mr-[15px] p-2 bg-primary text-white rounded-md font-medium text-sm" onClick={() => navigate("/auth")}>Sign in</button>
            <Link to={paths.WISHLIST}><img src={HeartIcon} alt="" className='w-[24px] h-[24px] mr-[13px] lg:block hidden' /></Link>
            <ShoppingCart />
        </div>
    )
}
