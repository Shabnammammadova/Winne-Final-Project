import { Order, OrderStatus } from "@/types"


export type CreateOrderRequestPayload = {
    startDate: string,
    endDate: string,
    productId: string
}

export type CreateOrderResponseType = {
    item?: Order,
    message: string
}

export type ChangeStatusRequestPayload = {
    id: string;
    status: OrderStatus.Approved | OrderStatus.Rejected
}