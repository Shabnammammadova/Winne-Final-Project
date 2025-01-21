import RootLayout from "@/components/shared/RootLayout";
import { paths } from "@/constants/paths";
import About from "@/pages/about";
import { Contact } from "@/pages/contact";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: paths.HOME,
                element: <HomePage />
            },
            {
                path: paths.ABOUT,
                element: <About />
            },
            {
                path: paths.CONTACT,
                element: <Contact />
            }
        ]
    },
]);