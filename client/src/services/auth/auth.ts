import axiosInstance from "..";
import { AuthResponseType, LoginRequestPayload, RegisterRequestPayload } from "./types";


const login = async (payload: LoginRequestPayload) => {
    return await axiosInstance.post<AuthResponseType>("/auth/login", payload);
};

const register = async (payload: RegisterRequestPayload) => {
    return await axiosInstance.post<AuthResponseType>("/auth/register", payload);
};

const logout = async () => {
    return await axiosInstance.post("/auth/logout");
};

const getCurrentUser = async () => {
    return await axiosInstance.get("/auth/current-user");
};

const authService = { login, register, getCurrentUser, logout };

export default authService;