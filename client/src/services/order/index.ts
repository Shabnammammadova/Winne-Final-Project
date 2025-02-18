import axiosInstance from "..";
import { ChangeStatusRequestPayload, CreateOrderRequestPayload } from "./types";


const getAll = async () => {
    return await axiosInstance.get("/order")
}



const create = async (data: CreateOrderRequestPayload) => {
    return await axiosInstance.post("/order", data)
}

const changeStatus = async (data: ChangeStatusRequestPayload) => {
    return await axiosInstance.patch(`/order/${data.id}/change-status`, {
        status: data.status
    })
}
const cancel = async (data: { id: string }) => {
    return await axiosInstance.patch(`/order/${data.id}/cancel`)
}


const orderService = { create, getAll, changeStatus, cancel }

export default orderService