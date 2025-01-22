import UserIcon from "../../../assets/icons/user.svg"
import HeartIcon from "../../../assets/icons/heart.svg"
import ShoppingIcon from "../../../assets/icons/shoppingbag.svg"


import { SearchSide } from "./Search"
export const Action = () => {
    return (
        <div className='flex items-center justify-end gap-3 cursor-pointer'>
            <SearchSide />
            <img src={UserIcon} alt="" className="w-[24px] h-[24px]" />
            <img src={HeartIcon} alt="" className='w-[24px] h-[24px] lg:block hidden' />
            <img src={ShoppingIcon} alt="" className='w-[24px] h-[24px]' />
        </div>
    )
}
