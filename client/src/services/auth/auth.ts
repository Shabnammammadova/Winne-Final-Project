import axiosInstance from "..";
import { AuthResponseType, ForgotPasswordPayload, LoginRequestPayload, RegisterRequestPayload, ResetPasswordPayload } from "./types";


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


const forgotPassword = async (payload: ForgotPasswordPayload) => {
    return await axiosInstance.post("/auth/forgot-password", payload);
};


const resetPassword = async (payload: ResetPasswordPayload) => {
    return await axiosInstance.post(`/auth/reset-password`, {
        token: payload.token,
        password: payload.password,
    });
};


const authService = { login, register, getCurrentUser, logout, forgotPassword, resetPassword };

export default authService;