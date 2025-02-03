import { Faq } from "@/types";

export type GetAllFaqResponseType = {
    items: Faq[]
    question: string,
    answer: string,
}

export type CreateFaqRequestPayload = {
    question: string;
    answer: string
}