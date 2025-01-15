import { paths } from "@/constants/paths"
import { Link } from "react-router-dom"
import { Action } from "./Action"
import Logo from "../../../assets/images/logo.webp"
import { NavLinks } from "./NavLinks"

export const Navbar = () => {
    return (
        <div className="bg-[rgb(255,255,255)] w-full fixed p-[25px] px-0 2xl:block text-[16px] transition-all duration-500 ease-in-out z-30">
            <div className="container flex items-center justify-between m-[15px]! p-0! z-50 sticky top-0 left-0 right-0 font-sans">
                <Link to={paths.HOME}>
                    <img src={Logo} width="140" alt="Winne - Wine &amp; Winery Responsive Shopify Theme" className="cursor-pointer" />
                </Link>
                <NavLinks />
                <Action />
            </div>
        </div>

    )
}



