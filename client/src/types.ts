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
export type Location = {
    _id: string,
    name: string,
    createdAt: string
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
        _id: string,
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
export type Order = {
    createdAt: string;
    id: string;
    product: Product | string;
    startDate: string;
    endDate: string;
    status: OrderStatus;
    total: number;
    updatedAt: string;
    user: User | string;
    _id: string;
    hasReview: boolean;
    paymentIntentId: string;
}

export enum OrderStatus {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Canceled = "canceled"
}
export type Conversation = {
    _id: string
    userName: string;
    userEmail: string;
    userId: string;
    messages: Message[];
    createdAt: string;
    updatedAt: string;
}
export type Message = {
    _id: string
    text: string;
    userId: string;
    userName: string;
    conversation: string | Conversation;
    createdAt: string;
    updatedAt: string;
}


export type CartItem = {
    productId: Product;
    quantity: number;
}

