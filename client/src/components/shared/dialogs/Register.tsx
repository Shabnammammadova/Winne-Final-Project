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
        path: ["confirm"],
    });

export const RegisterDialog = () => {
    const { isOpen, closeDialog, type, openDialog } = useDialog();
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
                error.response?.data?.message ??
                "Something went wrong! Please try again.";
            toast.error(message);
        },
    });

    if (isOpen && type !== ModalTypeEnum.REGISTER) {
        return null;
    }

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values);
    }

    return (
        <Dialog open={isOpen} onOpenChange={closeDialog}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle className="text-xl lg:text-3xl">
                        Create An Account
                    </DialogTitle>
                    <DialogDescription>
                        Already have an account?{" "}
                        <button
                            onClick={() => openDialog(ModalTypeEnum.LOGIN)}
                            className="text-primary"
                        >
                            Sign In
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
                                    <FormLabel>First Name</FormLabel>
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
                                    <FormLabel>Last Name</FormLabel>
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
                                    <FormLabel>Email</FormLabel>
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
                                    <FormLabel>Password</FormLabel>
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
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
                            Register
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};