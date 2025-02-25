export type Product = {
    _id: string;
    name: string;
    price: number;
    createdAt: string;
    currency: string;
    discount: number;
    images: string[];
}

export type CartItem = {
    productId: Product;
    quantity: number;
};
