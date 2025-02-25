import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { AuthResponseType } from "@/services/auth/types";
import authService from "@/services/auth/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { getCurrentUserAsync } from "@/store/features/userSlice";
import { useAppDispatch } from "@/hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "../../../assets/images/google-icon.png"
import GithubIcon from "../../../assets/images/github-icon.png"
import { useState } from "react";
import { useTranslation } from "react-i18next";


const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
});

export const LoginDialog = () => {
    const { isOpen, closeDialog, type, openDialog } = useDialog();
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation()

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const { mutate, isPending } = useMutation({
        mutationFn: authService.login,
        onSuccess: (response) => {
            toast.success(response.data.message);
            closeDialog();
            dispatch(getCurrentUserAsync());
        },
        onError: (error: AxiosError<AuthResponseType>) => {
            const message =
                error.response?.data.message ??
                "Something went wrong! Please try again.";
            toast.error(message);
        },
    });

    if (isOpen && type !== ModalTypeEnum.LOGIN) {
        return null;
    }


    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values);
    }
    const handleForgotPasswordClick = () => {
        closeDialog();
        navigate("/forgot-password");
    };
    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="bg-white dark:bg-black dark:text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl lg:text-3xl">{t("Sign In")}</DialogTitle>
                    <DialogDescription>
                        {t("Don't have an account?")}{"  "}
                        <button
                            onClick={() => openDialog(ModalTypeEnum.REGISTER)}
                            className="text-primary"
                        >
                            {t("Create an account")}
                        </button>
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("Email")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("Password")}</FormLabel>
                                    <div className="relative">
                                        <FormControl>
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="***********"
                                                {...field}
                                            />
                                        </FormControl>
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-2 text-gray-500"
                                        >
                                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                                        </button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Link to={"/forgot-password"} className="text-primary m-auto flex justify-center underline" onClick={handleForgotPasswordClick}>{t("Forgot Password?")}</Link>
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {t("Sign In")}
                        </Button>
                    </form>
                </Form>
                <div className="my-3 border-b text-center">
                    <div
                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white dark:bg-black dark:text-white transform translate-y-1/2">
                        {t("Or sign up with")}
                    </div>
                </div>
                <div className="flex flex-col">
                    <button
                        className="w-[300px] mb-2 mt-2 flex mx-auto  justify-center items-center gap-2  p-2 cursor-pointer border border-solid rounded-3xl  border-inherit font-bold"
                        onClick={() => {
                            window.location.href = "http://localhost:3000/auth/google";
                        }}
                    >
                        <img src={GoogleIcon} className="w-[1.5rem] h-[1.5rem]" alt="" />
                        Google
                    </button>
                    <button
                        className="w-[300px] mb-2 mt-2 flex mx-auto  justify-center items-center gap-2 p-2 cursor-pointer border border-solid rounded-3xl  border-inherit font-bold"
                        onClick={() => {
                            window.location.href = "http://localhost:3000/auth/github";
                        }}
                    >
                        <img src={GithubIcon} className="w-[1.5rem] h-[1.5rem] " alt="" />
                        Github
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};