import axiosInstance from ".."
import { CreateBlogRequestPayload, GetAllBlogResponseType, GetByIdBlogResponseType } from "./types";


const getAll = async (pageParams?: { take?: number, skip?: number }, searchParamsStr?: string) => {

    const searchParams = new URLSearchParams(searchParamsStr);
    if (pageParams?.take) searchParams.append("take", pageParams.take.toString())
    if (pageParams?.skip) searchParams.append("skip", pageParams.skip.toString())
    return await axiosInstance.get<GetAllBlogResponseType>(`/blog?${searchParams.toString()}`)
}

const getById = async (id: string) => {
    return await axiosInstance.get<GetByIdBlogResponseType>(`/blog/${id}`)
}
const create = async (data: CreateBlogRequestPayload) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    if (data.images)
        Array.from(data.images).forEach((image) => {
            formData.append("images", image)
        });

    return await axiosInstance.post("/blog", formData)
}

const edit = async (data: CreateBlogRequestPayload & { id?: string }) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);

    if (data.images)
        Array.from(data.images).forEach((image) => {
            formData.append(`images`, image)
        });

    return await axiosInstance.put(`/blog/${data.id}`, formData)
}

const blogService = {
    getAll,
    getById,
    create,
    edit
}

export default blogService