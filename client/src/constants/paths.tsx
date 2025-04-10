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
    ORDERS: "/orders",
    PAYMENT: (id = ":id") => `/payment/${id}`,
    LIST: "/list",
    DETAIL: (id = ":id") => `/wine/detail/${id}`,
    SUCCESS: "/success",
    FAILED: "/failed",
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
        },
        FAQ: {
            LIST: "/dashboard/faqs",
            CREATE: "/dashboard/faqs/create",
            EDIT: (id = ":id") => `/dashboard/faqs/edit/${id}`,
            REMOVE: "/dashboard/faqs"
        },
        CHAT: {
            VIEW: "/dashboard/chat",
            USER: (id = ":id") => `/dashboard/chat/${id}`
        },
        ORDER: {
            LIST: "/dashboard/orders"
        },
        REVIEWS: {
            LIST: "/dashboard/reviews"
        },
    }
}