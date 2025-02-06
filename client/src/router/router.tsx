import AuthLayout from "@/components/shared/AuthLayout";
import DashboardLayout from "@/components/shared/DashboardLayout";
import RootLayout from "@/components/shared/RootLayout";
import { paths } from "@/constants/paths";
import DashboardMainPage from "@/pages/(dashboard)/main";
import DashboardWinesPage from "@/pages/(dashboard)/wines/list";
import { About } from "@/pages/about";
import { Blog } from "@/pages/blog";
import { BlogDetail } from "@/pages/blog/components/BlogDetail";
import { Contact } from "@/pages/contact";
import { WineProductDetail } from "@/pages/detail";
import { Faq } from "@/pages/faq";
import { ForgotPassword } from "@/pages/forgot-password";
import HomePage from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { ResetPassword } from "@/pages/reset-password";
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
                path: paths.FORGOTPASSWORD,
                element: <ForgotPassword />
            },
            {
                path: paths.RESETPASSWORD(),
                element: <ResetPassword />
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
                path: paths.BLOGDETAIL(),
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
                path: "*",
                element: <NotFound />
            },
            {
                path: "",
                element: <AuthLayout />,

            },
            {
                path: "",
                element: <DashboardLayout />,
                children: [
                    {
                        path: paths.DASHBOARD.MAIN,
                        element: <DashboardMainPage />
                    },
                    {
                        path: paths.DASHBOARD.WINE.LIST,
                        element: <DashboardWinesPage />
                    }
                ]
            }
        ]
    },
])