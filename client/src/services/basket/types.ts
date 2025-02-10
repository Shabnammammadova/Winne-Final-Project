import { Basket } from "@/types";

export type GetAllBasketResponseType = {
    items: Basket[]
}
export type GetAddBasket = {
    productId: string
}
