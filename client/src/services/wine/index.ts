import axiosInstance from ".."
import { CreateWineRequestPayload, GetAllWineResponseType, GetByIdWineResponseType } from "./types";



const getAll = async (pageParams?: { take?: number, skip?: number, type?: "recommended" | "popular" }, searchParamsStr?: string) => {

    const searchParams = new URLSearchParams(searchParamsStr);
    if (pageParams?.take) searchParams.append("take", pageParams.take.toString())
    if (pageParams?.skip) searchParams.append("skip", pageParams.skip.toString())
    if (pageParams?.type) searchParams.append("type", pageParams.type)
    return await axiosInstance.get<GetAllWineResponseType>(`/product?${searchParams.toString()}`)
}
const getById = async (id: string) => {
    return await axiosInstance.get<GetByIdWineResponseType>(`/product/${id}`)
}
const create = async (data: CreateWineRequestPayload) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("discount", data.discount.toString());
    formData.append("categoryId", data.categoryId);
    if (data.images)
        Array.from(data.images).forEach((image) => {
            formData.append("images", image)
        });

    return await axiosInstance.post("/product", formData)
}

const edit = async (data: CreateWineRequestPayload & { id?: string }) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("price", data.price.toString());
    formData.append("discount", data.discount.toString());
    formData.append("categoryId", data.categoryId);

    if (data.images)
        Array.from(data.images).forEach((image) => {
            formData.append(`images`, image)
        });

    return await axiosInstance.put(`/product/${data.id}`, formData)
}

const remove = async (id: string) => {
    return await axiosInstance.delete(`/product/${id}`);
}


const wineService = {
    getAll,
    getById,
    create,
    edit,
    remove
}

export default wineService