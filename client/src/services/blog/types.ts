import { Blog } from "@/types";

export type GetAllBlogResponseType = {
    items: Blog[]
    name: string,
    desciption: string,
}
export type GetByIdBlogResponseType = {
    item: Blog;
    message: string
}

export type CreateBlogRequestPayload = {
    name: string;
    description: string
    images?: File[];
}