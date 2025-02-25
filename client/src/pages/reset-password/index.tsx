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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import authService from "@/services/auth/auth";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { paths } from "@/constants/paths";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const formSchema = z
    .object({
        password: z.string().min(6, "Password must be at least 6 characters."),
        confirmPassword: z.string().min(6, "Password must be at least 6 characters."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export const ResetPassword = () => {
    const { token } = useParams<{ token: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: authService.resetPassword,
        onSuccess: () => {
            toast.success("Password reset successful!");
            navigate(paths.HOME);
        },
        onError: (error: AxiosError) => {
            const message = error.response?.data?.message ?? "Something went wrong!";
            toast.error(message);
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (!token) {
            toast.error("Token is missing");
            return;
        }
        mutate({ token, password: values.password });
    };


    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);


    return (
        <div className="container mx-auto py-16">
            <div className="max-w-md mx-auto bg-white dark:text-black p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-4">{t("Reset Password")}</h2>
                <p className="text-center mb-8">{t("Enter a new password for Winne.")}</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                            placeholder="********"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            className="w-full mt-5"
                            disabled={isPending}
                            type="submit"
                        >
                            {t("Reset Password")}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
