import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavLinks = () => {
    const [showPageMenu, setShowPageMenu] = useState(false);

    return (
        <div className="p-0 relative">
            <ul className="lg:flex hidden flex-wrap flex-row items-center no-underline -ml-[25px] text-[17px] font-semibold text-black">
                <li className="mx-[18px] px-[.5rem] group relative w-max">
                    <Link to={paths.HOME} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">HOME</span>
                    </Link>
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max h-max">
                    <Link to={paths.SHOP} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">SHOP</span>
                    </Link>
                </li>
                <li
                    className="mx-[18px] px-[.5rem] group relative w-max"
                    onMouseEnter={() => setShowPageMenu(true)}
                    onMouseLeave={() => setShowPageMenu(false)}
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">PAGES</span>
                    {showPageMenu && <PageMenu />}
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max">
                    <Link to={paths.BLOGS} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">BLOGS</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const PageMenu = () => {
    return (
        <div
            className="absolute left-5 top-7 w-[300px] transform -translate-x-1/2 bg-white shadow-lg py-6 px-2 opacity-100 scale-100 z-10 flex flex-items items-center justify-center rounded-lg"
        >
            <div className="grid grid-cols-1 gap-4 cursor-pointer">
                <div >
                    <ul className="text-center">
                        <Link to={paths.ABOUT}>
                            <li className="text-gray-500  text-base hover:text-red-800 mt-2">About Us</li>
                        </Link>
                        <Link to={paths.CONTACT}><li className="text-gray-500 text-base hover:text-red-800 mt-2">Contact Us</li></Link>
                        <Link to={paths.FAQ}><li className="text-gray-500 text-base hover:text-red-800 mt-2">FAQs</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};
