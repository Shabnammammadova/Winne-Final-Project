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
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max h-max">
                    <Link to={paths.SHOP} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">SHOP</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                </li>
                <li
                    className="mx-[18px] px-[.5rem] group relative w-max"
                    onMouseEnter={() => setShowPageMenu(true)}
                    onMouseLeave={() => setShowPageMenu(false)}
                >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">PAGES</span>
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    {showPageMenu && <PageMenu />}
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max">
                    <Link to={paths.BLOGS} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">BLOGS</span>
                        <span className="absolute -bottom-1 left-0 w-0 transition-all h-[0.1px] bg-red-900 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const PageMenu = () => {
    return (
        <div
            className="absolute left-0 top-10 w-[600px] transform -translate-x-1/2 bg-white shadow-lg p-6 opacity-100 scale-100 z-10"
        >
            <div className="grid grid-cols-3 gap-4 cursor-pointer">
                <div>
                    <p className="text-lg font-semibold uppercase hover:text-red-800 mb-[5px]">Pre-built Pages</p>
                    <div className="border-b-[1px] border-red-900 w-[70px]"></div>
                    <ul className="space-y-2 mt-2">
                        <Link to={paths.ABOUT}>
                            <li className="text-gray-500 text-[15px] hover:text-red-800 mt-2">About Us</li>
                        </Link>
                        <Link to={paths.CONTACT}><li className="text-gray-500 text-[15px] hover:text-red-800 mt-2">Contact Us</li></Link>
                        <Link to={paths.FAQ}><li className="text-gray-500 text-[15px] hover:text-red-800 mt-2">FAQs</li></Link>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold uppercase hover:text-red-800 mb-[5px]">Ecommerce</p>
                    <div className="border-b-[1px] border-red-900 w-[70px]"></div>
                    <ul className="space-y-2 mt-2">
                        <li className="text-gray-500 text-[15px] hover:text-red-800">My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
