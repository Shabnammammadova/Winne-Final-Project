import axiosInstance from "..";
import { GetAddBasket, GetAllBasketResponseType } from "./types";


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
    remove
};

export default basketService;