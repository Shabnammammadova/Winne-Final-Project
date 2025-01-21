import { Footer } from "./footer"
import { Navbar } from "./navbar/Navbar"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout