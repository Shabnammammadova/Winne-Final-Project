export type User = {
    _id: string;
    name: string;
    surname: string;
    email: string;
    isBlocked: boolean;
    createdAt: string;
    avatar: string;
    role: UserRole;
};

export enum UserRole {
    Admin = "admin",
    User = "user",
}

export type Product = {
    _id: string,
    price: number;
    name: string;
    createdAt: string;
    currency: string;
    discount: number;
    category: Category;
    images: string[];
    reviews: Review[]
}
export type Blog = {
    _id: string,
    name: string,
    description: string,
    images: string[],
    createdAt: string
}

export type Faq = {
    _id: string,
    question: string,
    answer: string,
    createdAt: string
}
export type Favorite = {
    _id: string;
    productId: {
        _id: string;
        name: string;
        price: string;
        discount: string;
        images: string[];
    };
}
export type Basket = {
    _id: string;
    productId: {
        name: string;
        price: string;
        discount: string;
        images: string[];
    };
    quantity: string
}
export type Category = {
    _id: string,
    name: string,
    createdAt: string;
    count: number
}

export type Review = {
    author: User;
    content: string;
    createdAt: string;
    id: string;
    rating: number;
    product: Product;
    status: ReviewStatus;
    _id: string
}

export enum ReviewStatus {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
}