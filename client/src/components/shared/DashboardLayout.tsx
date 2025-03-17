import { useAppSelector } from "@/hooks/redux";
import { selectUserData } from "@/store/features/userSlice";
import { Spinner } from "./Spinner";
import { UserRole } from "@/types";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { paths } from "@/constants/paths";
import { GiWineBottle } from "react-icons/gi"
import { BiCategory } from "react-icons/bi"
import { FaQuestion } from "react-icons/fa6"
import { IoChatboxEllipsesOutline } from "react-icons/io5"
import { TbWritingSign } from "react-icons/tb"
import { TbShoppingBagCheck } from "react-icons/tb";
import { ScrollToTop } from "./ScrollToTop";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2"
import { MdRateReview } from "react-icons/md";

const DashboardLayout = () => {
    const { user, loading } = useAppSelector(selectUserData);
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    if (loading) {
        return <Spinner />;
    }
    if (!user || user.role !== UserRole.Admin) {
        return <Navigate to={paths.HOME} />;
    }

    const menuItems = [
        { name: "Home", icon: <HiOutlineHome />, path: "/" },
        { name: "Wines", icon: <GiWineBottle />, path: "/dashboard/wines" },
        { name: "Category", icon: <BiCategory />, path: "/dashboard/categories" },
        { name: "Blogs", icon: <TbWritingSign />, path: "/dashboard/blogs" },
        { name: "FAQs", icon: <FaQuestion />, path: "/dashboard/faqs" },
        { name: "Orders", icon: <TbShoppingBagCheck />, path: "/dashboard/orders" },
        { name: "Review", icon: <MdRateReview />, path: "/dashboard/reviews" },
        { name: "Chat", icon: <IoChatboxEllipsesOutline />, path: "/dashboard/chat" }
    ];

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-black dark:text-black">
            <div
                className={`bg-primary text-white p-4 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}
            >
                <button
                    className="text-white mb-4 text-2xl focus:outline-none"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? <IoMenu /> : <IoMenu />}
                </button>
                <nav className="flex flex-col gap-2">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            role="button"
                            className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-white hover:text-[#A53E4C] cursor-pointer"
                            onClick={() => navigate(item.path)}
                        >
                            <span className="text-xl">{item.icon}</span>
                            {sidebarOpen && <span>{item.name}</span>}
                        </div>
                    ))}
                </nav>
            </div>
            <div className="flex-1 p-6">
                <ScrollToTop />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;