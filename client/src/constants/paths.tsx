export const paths = {
    AUTH: "/auth",
    FORGOTPASSWORD: "/forgot-password",
    RESETPASSWORD: (token = ":token") => `/reset-password/${token}`,
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    PROFILE: "/profile",
    FAQ: "/faq",
    SHOP: "/shop",
    NOTFOUND: "/not-found",
    BLOGS: "/blog",
    BLOGDETAIL: (id = ":id") => `/blog/detail/${id}`,
    WISHLIST: "/wishlist",
    LIST: "/list",
    DETAIL: (id = ":id") => `/wine/detail/${id}`,
    DASHBOARD: {
        MAIN: "/dashboard",
        WINE: {
            LIST: "/dashboard/wines",
            CREATE: "/dashboard/wines/create",
            EDIT: (id = ":id") => `/dashboard/wines/edit/${id}`,
            REMOVE: "/dashboard/wines"
        },
        CATEGORY: {
            LIST: "/dashboard/categories",
            CREATE: "/dashboard/categories/create",
            EDIT: (id = ":id") => `/dashboard/categories/edit/${id}`,
            REMOVE: "/dashboard/categories"
        },
        BLOG: {
            LIST: "/dashboard/blogs",
            CREATE: "/dashboard/blogs/create",
            EDIT: (id = ":id") => `/dashboard/blogs/edit/${id}`,
            REMOVE: "/dashboard/blogs"
        }
    }
}