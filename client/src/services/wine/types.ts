import { Product } from "@/types";

export type GetAllWineResponseType = {
    items: Product[]
    message: string,
    total: number,
    skip: number,
    take: number
}
export type GetByIdWineResponseType = {
    item: Product;
    message: string
}

export type CreateWineRequestPayload = {
    name: string;
    price: number;
    discount: number;
    categoryId: string;
    images?: File[];
}