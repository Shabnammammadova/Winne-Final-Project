import { useAppSelector } from "@/hooks/redux"
import { selectUserData } from "@/store/features/userSlice"
import { Spinner } from "./Spinner"
import { UserRole } from "@/types"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { paths } from "@/constants/paths"
import { FaWineBottle } from "react-icons/fa"
import { BiSolidCategory } from "react-icons/bi"
import { FaQuestion } from "react-icons/fa"
import { IoChatboxEllipses } from "react-icons/io5"
import { SiBloglovin } from "react-icons/si"
import { TbShoppingBagCheck } from "react-icons/tb"
import { ScrollToTop } from "./ScrollToTop"


const DashboardLayout = () => {
    const { user, loading } = useAppSelector(selectUserData)
    const navigate = useNavigate()
    if (loading) {
        return (
            <Spinner />
        )
    }
    if (!user || user.role !== UserRole.Admin) {
        return <Navigate to={paths.HOME} />

    }
    return (
        <div >
            <div className="flex gap-4">

                <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 h-screen p-4 transition-all duration-300">

                    <nav className="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-gray-700">
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none" onClick={() => navigate("/dashboard/wines")}>
                            <div className="grid place-items-center mr-4">
                                <FaWineBottle />
                            </div>
                            Wines
                        </div>
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <BiSolidCategory />
                            </div>
                            Category
                        </div>
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <SiBloglovin />
                            </div>
                            Blogs
                        </div>
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <FaQuestion />
                            </div>
                            FAQs
                        </div>
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <TbShoppingBagCheck />
                            </div>
                            Orders
                        </div>
                        <div role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-red-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-red-900 focus:text-red-900 active:text-red-900 outline-none">
                            <div className="grid place-items-center mr-4">
                                <IoChatboxEllipses />
                            </div>
                            Chat
                        </div>
                    </nav>
                </div>
                <div className="p-6 m-6 rounded-[10px] bg-white w-full">
                    <Outlet />
                </div>
                <ScrollToTop />
            </div>
        </div>
    )
}

export default DashboardLayout
