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
import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import basketService from "@/services/basket"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslation } from "react-i18next"
import { LuHeart } from "react-icons/lu";


export const Action = () => {
    const { openDialog } = useDialog()
    const { user } = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();


    const { data: basketList } = useQuery({
        queryKey: [QUERY_KEYS.SHOP],
        queryFn: () => basketService.getAll()
    })

    const basket = basketList?.data.items
    console.log("basketList", basketList);

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
                            <button> <User className="w-[24px] h-[24px] mr-[13px]" /></button>
                        )}


                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="capitalize">{t("my account")}</DropdownMenuLabel>
                        <DropdownMenuItem className="capitalize">
                            <Link to="/profile">{t("profile")}</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {
                            user.role === UserRole.Admin && <DropdownMenuItem asChild >
                                <Link to={paths.DASHBOARD.MAIN} className="cursor-pointer capitalize">{t("dashboard")}</Link>
                            </DropdownMenuItem>
                        }
                        <DropdownMenuItem className="cursor-pointer capitalize" onClick={handleLogout}> <LogOut />
                            <span>{t("log out")}</span>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button onClick={() => openDialog(ModalTypeEnum.LOGIN)} className="mr-[10px] capitalize">{t("sign in")}</Button>
            )}
            <SearchSide />
            <LanguageSwitcher />
            <ThemeToggle />
            <Link to={paths.WISHLIST}><LuHeart className='w-[24px] h-[24px] mr-[13px]  dark:text-white ' /></Link>
            <ShoppingCart basket={basket} />
        </div>
    )
}
