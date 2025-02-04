import { Favorite } from "@/types";

export type GetAllFavoriteResponseType = {
    items: Favorite[]
}
export type GetAddFavorite = {
    productId: string
}
