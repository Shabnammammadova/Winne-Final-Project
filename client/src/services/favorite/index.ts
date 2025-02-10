import axiosInstance from "..";
import { GetAddFavorite, GetAllFavoriteResponseType } from "./types";

const getAll = async () => {
    return await axiosInstance.get<GetAllFavoriteResponseType>("/favorite");
};
const add = async (payload: { userId: string, productId: string }) => {
    try {
        return await axiosInstance.post<GetAddFavorite>("/favorite/add", payload)
    } catch (error) {
        console.error("Error adding product to favorites:", error);
        throw error;
    }
};

const remove = async (productId: string) => {
    try {
        const response = await axiosInstance.delete(`/favorite/${productId}`);
        return response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

const favoriteService = {
    getAll,
    add,
    remove
};

export default favoriteService;