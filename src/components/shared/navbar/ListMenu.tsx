import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";
import { ShopMenu } from "../dropdown/ShopMenu";
import { PageMenu } from "../dropdown/PageMenu";
import { BlogMenu } from "../dropdown/BlogMenu";

export const ListMenu = () => {

    return (
        <div className="p-0 relative">
            <ul className="flex flex-wrap flex-row items-center no-underline -ml-[25px] text-[17px] font-semibold text-black">
                <li className="mx-[18px] px-[.5rem] group relative w-max">
                    <Link to={paths.HOME} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">HOME</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                </li>
                <li
                    className="mx-[18px] px-[.5rem] group relative w-max h-max"
                >
                    <Link to={paths.SHOP} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">SHOP</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                    <ShopMenu />
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max"
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">PAGES</span>
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    <PageMenu />
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max"
                >
                    <Link to={paths.BLOGS} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">BLOGS</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                    <BlogMenu />
                </li>
            </ul>
        </div>
    );
};
