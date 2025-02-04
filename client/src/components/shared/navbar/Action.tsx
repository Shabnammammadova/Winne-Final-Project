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
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { logoutAsync, selectUserData } from "@/store/features/userSlice"
import { LogOut, User } from "lucide-react"
import { UserRole } from "@/types"
import ThemeToggle from "../ThemeToggle"




export const Action = () => {
    const { openDialog } = useDialog()
    const { user } = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    return (
        <div className='flex items-center justify-end  cursor-pointer'>
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        {user.avatar ? (
                            <button className="rounded-full duration-75 mr-[15px]">
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="rounded-full w-10 h-10 object-cover"
                                />
                            </button>

                        ) : (
                            <User className="w-[24px] h-[24px] mr-[13px]" />
                        )}


                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {
                            user.role === UserRole.User && <DropdownMenuItem asChild>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Link to="/profile">Profile</Link>
                                </DropdownMenuItem>
                            </DropdownMenuItem>
                        }
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            {
                                user.role === UserRole.Admin && <DropdownMenuItem asChild>
                                    <Link to={paths.DASHBOARD.MAIN} className="cursor-pointer">Dashboard</Link>
                                </DropdownMenuItem>
                            }
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}> <LogOut />
                            <span>Log out</span>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button onClick={() => openDialog(ModalTypeEnum.LOGIN)} className="mr-[10px]">Sign In</Button>
            )}
            <SearchSide />
            <ThemeToggle />
            <Link to={paths.WISHLIST}><img src={HeartIcon} alt="" className='w-[24px] h-[24px] mr-[13px] lg:block hidden' /></Link>
            <ShoppingCart />
        </div>
    )
}
