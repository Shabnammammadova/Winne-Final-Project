import { paths } from "@/constants/paths"
import { Link } from "react-router-dom"
import { ListMenu } from "./ListMenu"
import { Action } from "./Action"

export const Navbar = () => {
    return (
        <div className="bg-[rgb(255,255,255)] p-[25px] px-0 2xl:block text-[16px]">
            <div className="container flex items-center justify-between m-[15px]! p-0! z-50 sticky top-0 left-0 right-0 font-sans">
                <Link to={paths.HOME}>
                    <img src="//winne-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1653980231" width="140" alt="Winne - Wine &amp; Winery Responsive Shopify Theme"></img>
                </Link>
                <ListMenu />
                <Action />
            </div>
        </div>

    )
}

