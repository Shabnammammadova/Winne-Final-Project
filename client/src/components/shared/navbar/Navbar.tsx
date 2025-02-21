import { useState } from "react";
import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";
import { Action } from "./Action";
import Logo from "../../../assets/images/logo.webp";
import { NavLinks } from "./NavLinks";
import { AlignLeft } from "lucide-react";
import { useTranslation } from "react-i18next"

export const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="bg-[rgb(255,255,255)] dark:bg-neutral-950 dark:text-white w-full sticky top-0 p-[25px] px-0 2xl:block text-[16px] transition-all duration-500 ease-in-out z-50">
            <div className="container flex items-center justify-between p-[0.5rem] sm:p-[1px] md:p-[2px] lg:p-[4px] xl:p-[3px] z-50 sticky top-0 left-0 right-0 font-sans">
                <div className="lg:hidden xs:flex xs:items-center xs:gap-2 cursor-pointer" onClick={toggleSidebar}>
                    <AlignLeft />
                </div>
                <Link
                    to={paths.HOME}
                    className="lg:m-0 xs:m-0 xs:flex xs:items-center xs:justify-center"
                >
                    <img
                        src={Logo}
                        width="140"
                        alt="Winne - Wine & Winery Responsive Shopify Theme"
                        className="cursor-pointer filter dark:invert"
                    />
                </Link>
                <NavLinks />
                <Action />
            </div>

            <div
                className={`fixed top-0 left-0 w-[250px] h-full bg-white dark:bg-black dark:text-white shadow-xl transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
            >
                <div className="flex justify-between items-center p-6 bg-primary border-b border-gray-200">
                    <h6 className="text-2xl flex items-center gap-2 capitalize dark:text-white">  <AlignLeft />{t("menu")}</h6>
                </div>
                <nav className="p-4 ">
                    <Link
                        to={paths.HOME}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("home")}
                    </Link>
                    <Link
                        to={paths.SHOP}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("shop")}
                    </Link>
                    <Link
                        to={paths.ABOUT}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("about us")}
                    </Link>
                    <Link
                        to={paths.CONTACT}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("contact us")}
                    </Link>
                    <Link
                        to={paths.FAQ}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("faq")}
                    </Link>

                    <Link
                        to={paths.BLOGS}
                        className="block mb-4 text-black hover:text-red-800 font-medium uppercase dark:text-white dark:hover:text-primary"
                        onClick={toggleSidebar}
                    >
                        {t("blogs")}
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


