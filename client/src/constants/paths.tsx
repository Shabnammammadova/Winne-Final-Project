export const paths = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
    FAQ: "/faq",
    SHOP: "/shop",
    BLOGS: "/blogs",
    WISHLIST: "/wishlist",
    LIST: "/list",
    DETAIL: (id = ":id") => `/detail/${id}`,
}