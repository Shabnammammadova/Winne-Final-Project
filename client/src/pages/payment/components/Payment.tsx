import { paths } from "@/constants/paths";
import orderService from "@/services/order";
import { CreateOrderResponseType } from "@/services/order/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm, UseFormReturn } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// Define form schema using Zod
const FormSchema = z.object({
    firstname: z.string().min(4, { message: "Firstname must be at least 4 characters." }),
    lastname: z.string().min(4, { message: "Lastname must be at least 4 characters." }),
    address: z.string().min(4, { message: "Addresses must be at least 4 characters" }),
    city: z.string().min(4, { message: "City must be at least 4 characters." }),
    state: z.string().min(4, { message: "State must be at least 4 characters." }),
    zipCode: z.string().length(5, { message: "Zip code must be exactly 5 digits." }),
    cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be exactly 16 digits." }),
    cvv: z.string().regex(/^\d{3}$/, { message: "CVV must be exactly 3 digits." }),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, { message: "Expiration date must be in MM/YY format." }),

});

// Define the type for form values
type FormType = UseFormReturn<z.infer<typeof FormSchema>>;

const Payment = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            cardNumber: "",
            cvv: "",
            expirationDate: "",

        },
    });

    const { mutate } = useMutation({
        mutationFn: orderService.create,
        onSuccess: () => {
            console.log("Order created successfully");
            toast.success("Order created successfully");
            navigate(paths.PROFILE);
            form.reset();
        },
        onError: (error: AxiosError<CreateOrderResponseType>) => {
            toast.error(error?.response?.data?.message || "Something went wrong");
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const payload = {
            productId: id!,
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            cardNumber: data.cardNumber,
            cvv: data.cvv,
            expirationDate: data.expirationDate,

        };
        mutate(payload);
        console.log(payload);
    }

    return (
        <div className="dark:bg-black">
            <form className="w-full max-w-3xl mx-auto p-8" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="bg-white dark:bg-black p-8 rounded-lg shadow-md border dark:border-white">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

                    {/* Shipping Address */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Shipping Address</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstname" className="block text-black dark:text-white mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    {...form.register("firstname")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.firstname?.message}</span>
                            </div>
                            <div>
                                <label htmlFor="lastname" className="block text-black dark:text-white mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    {...form.register("lastname")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.lastname?.message}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="address" className="block text-black dark:text-white mb-1">Address</label>
                            <input
                                type="text"
                                id="address"
                                {...form.register("address")}
                                className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                            />
                            <span className="text-red-500">{form.formState.errors.address?.message}</span>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="city" className="block text-black dark:text-white mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                {...form.register("city")}
                                className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                            />
                            <span className="text-red-500">{form.formState.errors.city?.message}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="state" className="block text-black dark:text-white mb-1">State</label>
                                <input
                                    type="text"
                                    id="state"
                                    {...form.register("state")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.state?.message}</span>
                            </div>
                            <div>
                                <label htmlFor="zipCode" className="block text-black dark:text-white mb-1">ZIP Code</label>
                                <input
                                    type="text"
                                    id="zipCode"
                                    {...form.register("zipCode")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.zipCode?.message}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                        <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Payment Information</h2>
                        <div className="mt-4">
                            <label htmlFor="cardNumber" className="block text-black dark:text-white mb-1">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                {...form.register("cardNumber")}
                                className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                            />
                            <span className="text-red-500">{form.formState.errors.cardNumber?.message}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="expirationDate" className="block text-black dark:text-white mb-1">Expiration Date</label>
                                <input
                                    type="text"
                                    id="expirationDate"
                                    {...form.register("expirationDate")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.expirationDate?.message}</span>
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block text-black dark:text-white mb-1">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    {...form.register("cvv")}
                                    className="w-full rounded-lg border py-2 px-3 dark:bg-white dark:text-black dark:border-none"
                                />
                                <span className="text-red-500">{form.formState.errors.cvv?.message}</span>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-end">
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg dark:bg-primary dark:text-black dark:hover:bg-teal-900">
                            Order Now
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
