import { paths } from "@/constants/paths";
import { Link } from "react-router-dom";

export const NavLinks = () => {

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
                <li className="mx-[18px] px-[.5rem] group relative w-max h-max">
                    <Link to={paths.ABOUT} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">ABOUT US</span>
                    </Link>
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max h-max">
                    <Link to={paths.CONTACT} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">CONTACT US</span>
                    </Link>
                </li>
                <li className="mx-[18px] px-[.5rem] group relative w-max h-max">
                    <Link to={paths.FAQ} className="relative">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-red-800">FAQ</span>
                    </Link>
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

