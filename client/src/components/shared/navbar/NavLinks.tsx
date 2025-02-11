import { paths } from "@/constants/paths";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NavLinks = () => {

    const { t } = useTranslation();

    return (
        <div className="p-0 relative">
            <ul className="lg:flex hidden flex-wrap flex-row items-center no-underline gap-x-[15px] text-[17px] font-semibold text-black">
                <li className="px-[.5rem] group relative w-max">
                    <Link to={paths.HOME} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("home")}</span>
                    </Link>
                </li>
                <li className="px-[.5rem] group relative w-max h-max">
                    <Link to={paths.SHOP} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("shop")}</span>
                    </Link>
                </li>
                <li className="px-[.5rem] group relative w-max h-max">
                    <Link to={paths.ABOUT} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("about us")}</span>
                    </Link>
                </li>
                <li className="px-[.5rem] group relative w-max h-max">
                    <Link to={paths.CONTACT} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("contact us")}</span>
                    </Link>
                </li>
                <li className="px-[.5rem] group relative w-max h-max">
                    <Link to={paths.FAQ} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("faq")}</span>
                    </Link>
                </li>
                <li className="px-[.5rem] group relative w-max">
                    <Link to={paths.BLOGS} className="relative group">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800 uppercase">{t("blogs")}</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
};

