import { Basket } from "@/types";

export type GetAllBasketResponseType = {
    items: Basket[]
}
export type GetAddBasket = {
    productId: string
}

export type GetUpdateBasketResponseType = {
    id: string;
    userId: string;
    productId: string;
    quantity: number;
};