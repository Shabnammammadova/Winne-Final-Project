import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { AiOutlineEye } from "react-icons/ai";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth/auth";
import { AxiosError } from "axios";
import { AuthResponseType } from "@/services/auth/types";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const formSchema = z
    .object({
        name: z.string().min(2).max(50),
        surname: z.string().min(2).max(50),
        email: z.string().min(2).max(50),
        password: z.string().min(2).max(50),
        confirmPassword: z.string().min(2).max(50),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export const RegisterDialog = () => {
    const { isOpen, closeDialog, type, openDialog } = useDialog();
    const [showPassword, setShowPassword] = useState(false);
    const { t } = useTranslation()

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: authService.register,
        onSuccess: (response) => {
            toast.success(response.data.message);
            openDialog(ModalTypeEnum.LOGIN);
        },
        onError: (error: AxiosError<AuthResponseType>) => {
            const message =
                error.response?.data?.message ?? "Something went wrong! Please try again.";
            toast.error(message);
        },
    });

    if (isOpen && type !== ModalTypeEnum.REGISTER) {
        return null;
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values);
    }

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="bg-white dark:bg-black dark:text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl lg:text-3xl capitalize">
                        {t("Create an account")}
                    </DialogTitle>
                    <DialogDescription>
                        {t("Already have an account?")}{" "}
                        <button
                            onClick={() => openDialog(ModalTypeEnum.LOGIN)}
                            className="text-primary"
                        >
                            {t("Sign In")}
                        </button>
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("First Name")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="surname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("Last Name")}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t("Confirm Password")}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password"
                                            placeholder="***********"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isPending}>
                            {t("Register")}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};
