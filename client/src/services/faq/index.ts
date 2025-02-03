import axiosInstance from "..";
import { CreateFaqRequestPayload, GetAllFaqResponseType } from "./types";


const getAll = async () => {
    return await axiosInstance.get<GetAllFaqResponseType>("/faq");
};


const create = async (data: CreateFaqRequestPayload) => {
    return await axiosInstance.post("/faq", {
        question: data.question,
        answer: data.answer,
    });
};


const edit = async (data: CreateFaqRequestPayload & { id: string }) => {
    return await axiosInstance.put(`/faq/${data.id}`, {
        question: data.question,
        answer: data.answer,
    });
};


const remove = async (id: string) => {
    return await axiosInstance.delete(`/faq/${id}`);
};

const faqService = {
    getAll,
    create,
    edit,
    remove,
};

export default faqService;
