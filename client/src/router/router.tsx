import Auth from "@/components/shared/auth";
import AuthLayout from "@/components/shared/AuthLayout";
import RootLayout from "@/components/shared/RootLayout";
import { paths } from "@/constants/paths";
import { About } from "@/pages/about";
import { Blog } from "@/pages/blog";
import { BlogDetail } from "@/pages/blog/components/BlogDetail";
import { Contact } from "@/pages/contact";
import { WineProductDetail } from "@/pages/detail";
import { Faq } from "@/pages/faq";
import HomePage from "@/pages/home";
import Shop from "@/pages/shop";
import { WishList } from "@/pages/wishlist";
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
            },
            {
                path: paths.FAQ,
                element: <Faq />
            },
            {
                path: paths.BLOGS,
                element: <Blog />
            },
            {
                path: paths.BLOGDEATIL(),
                element: <BlogDetail />
            },
            {
                path: paths.WISHLIST,
                element: <WishList />
            },
            {
                path: paths.DETAIL(),
                element: <WineProductDetail />
            },
            {
                path: paths.SHOP,
                element: <Shop />
            },
            {
                path: "",
                element: <AuthLayout />,
                children: [
                    {
                        path: paths.AUTH,
                        element: <Auth />
                    }
                ]
            }
        ]
    },
])