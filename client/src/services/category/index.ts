import axiosInstance from ".."
import { CreateCategoryRequestPayload, GetAllCategoryResponseType, GetByIdCategoryResponseType } from "./types"


const getAll = async () => {
    return await axiosInstance.get<GetAllCategoryResponseType>("/category")
}
const getById = async (id: string) => {
    return await axiosInstance.get<GetByIdCategoryResponseType>(`/category/${id}`)
}
const create = async (data: CreateCategoryRequestPayload) => {
    const response = await axiosInstance.post("/category", {
        name: data.name,
    });

    return response.data;
}

const edit = async (id: string, data: CreateCategoryRequestPayload) => {
    return await axiosInstance.put(`/category/${id}`, {
        name: data.name,
    });
}
const remove = async (id: string) => {
    return await axiosInstance.delete(`/category/${id}`);
}

const categoryService = {
    getAll, create, edit, getById,
    remove
}

export default categoryService