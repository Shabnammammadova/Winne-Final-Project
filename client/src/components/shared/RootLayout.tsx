import { useAppDispatch } from "@/hooks/redux"
import { Dialogs } from "./dialogs"
import { Footer } from "./footer"
import { Navbar } from "./navbar/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { getCurrentUserAsync } from "@/store/features/userSlice"
import { Chat } from "./Chat"


const RootLayout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation()

    const isDashboardPage = location.pathname.includes("dashboard")
    useEffect(() => {
        dispatch(getCurrentUserAsync())
    }, [])

    return (
        <div>
            <Navbar />
            <Outlet />
            <Dialogs />
            {!isDashboardPage && <Chat />}
            <Footer />
        </div>
    )
}

export default RootLayout