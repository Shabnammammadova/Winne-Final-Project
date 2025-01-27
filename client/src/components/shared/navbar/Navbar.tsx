import { useState } from "react";
import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";
import { Action } from "./Action";
import Logo from "../../../assets/images/logo.webp";
import { NavLinks } from "./NavLinks";
import { AlignLeft, ChevronRight } from "lucide-react";

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showPageMenu, setShowPageMenu] = useState(false);

    const togglePageMenu = () => {
        setShowPageMenu((prevState) => !prevState);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="bg-[rgb(255,255,255)] w-full sticky top-0 p-[25px] px-0 2xl:block text-[16px] transition-all duration-500 ease-in-out z-50">
            <div className="container flex items-center justify-between m-[15px]! p-0! z-50 sticky top-0 left-0 right-0 font-sans">
                <div className="lg:hidden  xs:flex xs:items-center xs:gap-2 cursor-pointer" onClick={toggleSidebar}>
                    <AlignLeft />
                </div>
                <Link
                    to={paths.HOME}
                    className="lg:m-0 xs:m-auto xs:flex xs:items-center xs:justify-center"
                >
                    <img
                        src={Logo}
                        width="140"
                        alt="Winne - Wine &amp; Winery Responsive Shopify Theme"
                        className="cursor-pointer"
                    />
                </Link>
                <NavLinks />
                <Action />
            </div>
            <div
                className={`fixed top-0 left-0 w-[250px] h-full bg-white shadow-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
            >
                <div className="flex justify-between items-center p-6 bg-primary border-b border-gray-200">
                    <h6 className="text-2xl flex items-center gap-2">  <AlignLeft />Menu</h6>
                </div>
                <nav className="p-4">
                    <Link
                        to={paths.HOME}
                        className="block mb-4 text-black hover:text-gray-700 font-medium"
                        onClick={toggleSidebar}
                    >
                        HOME
                    </Link>
                    <Link
                        to={paths.SHOP}
                        className="block mb-4 text-black hover:text-gray-700 font-medium"
                        onClick={toggleSidebar}
                    >
                        SHOP
                    </Link>
                    <div className="flex items-center justify-between">
                        <li
                            className="block mb-4 text-black hover:text-gray-700 font-medium"
                            onClick={() => setShowPageMenu(false)}
                        >
                            PAGES
                        </li>
                        <ChevronRight onClick={togglePageMenu} />
                    </div>
                    {showPageMenu && (
                        <div className="pb-[15px]">
                            <div>
                                <ul className="space-y-2 mt-1">
                                    <Link to={paths.ABOUT}><li className="text-gray-500 text-[15px] hover:text-red-800">About Us</li></Link>
                                    <Link to={paths.CONTACT}><li className="text-gray-500 text-[15px] hover:text-red-800">Contact Us</li></Link>
                                    <Link to={paths.FAQ}><li className="text-gray-500 text-[15px] hover:text-red-800">FAQs</li></Link>
                                </ul>
                            </div>
                        </div>
                    )}
                    <Link
                        to={paths.BLOGS}
                        className="block mb-4 text-black hover:text-gray-700 font-medium"
                        onClick={toggleSidebar}
                    >
                        BLOGS
                    </Link>
                </nav>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};


