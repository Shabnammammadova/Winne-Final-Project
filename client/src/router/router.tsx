import AuthLayout from "@/components/shared/AuthLayout";
import DashboardLayout from "@/components/shared/DashboardLayout";
import RootLayout from "@/components/shared/RootLayout";
import { paths } from "@/constants/paths";
import DashboardCreateBlogPage from "@/pages/(dashboard)/blog/create";
import DashboardBlogPage from "@/pages/(dashboard)/blog/list";
import DashboardEditBlogPage from "@/pages/(dashboard)/blog/update";
import DashboardCreateCategoryPage from "@/pages/(dashboard)/category/create";
import DashboardCategoryPage from "@/pages/(dashboard)/category/list";
import DashboardEditCategoryPage from "@/pages/(dashboard)/category/update";
import ChatPage from "@/pages/(dashboard)/chat";
import DashboardCreateFaqPage from "@/pages/(dashboard)/faq/create";
import DashboardFaqPage from "@/pages/(dashboard)/faq/list";
import DashboardEditFaqPage from "@/pages/(dashboard)/faq/update";
import DashboardMainPage from "@/pages/(dashboard)/main";
import DashboardOrdersPage from "@/pages/(dashboard)/order/list";
import DashboardCreateWinePage from "@/pages/(dashboard)/wines/create";
import DashboardWinesPage from "@/pages/(dashboard)/wines/list";
import DashboardEditWinePage from "@/pages/(dashboard)/wines/update";
import { About } from "@/pages/about";
import { Blog } from "@/pages/blog";
import { BlogDetail } from "@/pages/blog/components/BlogDetail";
import { Contact } from "@/pages/contact";
import { WineProductDetail } from "@/pages/detail";
import FailedPage from "@/pages/failed";
import { Faq } from "@/pages/faq";
import { ForgotPassword } from "@/pages/forgot-password";
import HomePage from "@/pages/home";
import { NotFound } from "@/pages/not-found";
import { UserProfile } from "@/pages/profile";
import { ResetPassword } from "@/pages/reset-password";
import Shop from "@/pages/shop";
import SuccessPage from "@/pages/success";
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
                path: paths.PROFILE,
                element: <UserProfile />

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
                path: paths.SUCCESS,
                element: <SuccessPage />
            },
            {
                path: paths.FAILED,
                element: <FailedPage />
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
                    },
                    {
                        path: paths.DASHBOARD.WINE.CREATE,
                        element: <DashboardCreateWinePage />
                    },
                    {
                        path: paths.DASHBOARD.WINE.EDIT(),
                        element: <DashboardEditWinePage />
                    },
                    {
                        path: paths.DASHBOARD.CATEGORY.LIST,
                        element: <DashboardCategoryPage />
                    },
                    {
                        path: paths.DASHBOARD.CATEGORY.CREATE,
                        element: <DashboardCreateCategoryPage />
                    },
                    {
                        path: paths.DASHBOARD.CATEGORY.EDIT(),
                        element: <DashboardEditCategoryPage />
                    },
                    {
                        path: paths.DASHBOARD.BLOG.LIST,
                        element: <DashboardBlogPage />
                    },
                    {
                        path: paths.DASHBOARD.BLOG.CREATE,
                        element: <DashboardCreateBlogPage />
                    },
                    {
                        path: paths.DASHBOARD.BLOG.EDIT(),
                        element: <DashboardEditBlogPage />
                    },
                    {
                        path: paths.DASHBOARD.FAQ.LIST,
                        element: <DashboardFaqPage />
                    },
                    {
                        path: paths.DASHBOARD.FAQ.CREATE,
                        element: <DashboardCreateFaqPage />
                    },
                    {
                        path: paths.DASHBOARD.FAQ.EDIT(),
                        element: <DashboardEditFaqPage />
                    },
                    {
                        path: paths.DASHBOARD.CHAT.VIEW,
                        element: <ChatPage />
                    },
                    {
                        path: paths.DASHBOARD.CHAT.USER(),
                        element: <ChatPage />
                    },
                    {
                        path: paths.DASHBOARD.ORDER.LIST,
                        element: <DashboardOrdersPage />
                    }
                ]
            }
        ]
    },
])