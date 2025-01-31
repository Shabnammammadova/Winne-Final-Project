import HeartIcon from "../../../assets/icons/heart.svg"
import { SearchSide } from "./Search"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"
import { ShoppingCart } from "../shopping"
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/hooks/redux"
import { selectUserData } from "@/store/features/userSlice"
import { User } from "lucide-react"




export const Action = () => {
    const { openDialog } = useDialog()
    const { user } = useAppSelector(selectUserData);


    return (
        <div className='flex items-center justify-end  cursor-pointer'>
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <User className="w-[24px] h-[24px] mr-[13px]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <Link to="/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/reservations">Reservations</Link>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button onClick={() => openDialog(ModalTypeEnum.LOGIN)}>Sign In</Button>
            )}
            <SearchSide />
            <Link to={paths.WISHLIST}><img src={HeartIcon} alt="" className='w-[24px] h-[24px] mr-[13px] lg:block hidden' /></Link>
            <ShoppingCart />
        </div>
    )
}
