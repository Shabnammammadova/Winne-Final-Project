import { useAppDispatch } from "@/hooks/redux"
import { Dialogs } from "./dialogs"
import { Footer } from "./footer"
import { Navbar } from "./navbar/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { getCurrentUserAsync } from "@/store/features/userSlice"
import { Chat } from "./Chat"
import "../../i18"
import { useTranslation } from 'react-i18next'


const RootLayout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation()
    const { t, i18n } = useTranslation()
    useEffect(() => {
        const changeLanguage = async () => {
            await i18n.changeLanguage(navigator.language);
        }
        changeLanguage();
    }, []);

    const isDashboardPage = location.pathname.includes("dashboard")
    useEffect(() => {
        dispatch(getCurrentUserAsync())
    }, [])

    return (
        <div>
            {!isDashboardPage && <Navbar />}
            <Outlet />
            <Dialogs />
            {!isDashboardPage && <Chat />}
            {!isDashboardPage && <Footer />}
        </div>
    )
}

export default RootLayout