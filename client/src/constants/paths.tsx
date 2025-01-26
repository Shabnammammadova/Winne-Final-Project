export const paths = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    FAQ: "/faq",
    SHOP: "/shop",
    BLOGS: "/blogs",
    BLOGDEATIL: (id = ":id") => `/blog/detail/${id}`,
    WISHLIST: "/wishlist",
    LIST: "/list",
    DETAIL: (id = ":id") => `/detail/${id}`,
}