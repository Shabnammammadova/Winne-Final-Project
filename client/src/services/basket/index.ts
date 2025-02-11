import axiosInstance from "..";
import { GetAddBasket, GetAllBasketResponseType, GetUpdateBasketResponseType } from "./types";


const getAll = async () => {
    return await axiosInstance.get<GetAllBasketResponseType>("/basket");
};
const add = async (payload: { userId: string, productId: string }) => {
    try {
        return await axiosInstance.post<GetAddBasket>("/basket/add", payload)
    } catch (error) {
        console.error("Error adding product to basket:", error);
        throw error;
    }
};
const update = async (payload: { userId: string, productId: string, quantity: number }) => {
    try {
        const response = await axiosInstance.put<GetUpdateBasketResponseType>(`/basket/update`, payload);
        return response.data;
    } catch (error) {
        console.error("Error updating basket:", error);
        throw error;
    }
};
const remove = async (productId: string) => {
    try {
        const response = await axiosInstance.delete(`/basket/${productId}`);
        return response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const basketService = {
    getAll,
    add,
    update,
    remove
};

export default basketService;