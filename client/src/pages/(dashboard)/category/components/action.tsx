import { Spinner } from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { paths } from "@/constants/paths";
import { QUERY_KEYS } from "@/constants/query-keys";
import categoryService from "@/services/category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long."),
});

type Props = {
    type: "create" | "update";
};

const CategoryForm = ({ type }: Props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = type === "update";

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_CATEGORY, id],
        queryFn: () => categoryService.getById(id as string),
        enabled: isEdit && !!id,
    });

    const { mutateAsync } = useMutation({
        mutationFn: async (formData: z.infer<typeof formSchema>) => {
            if (isEdit) {
                return categoryService.edit(id as string, formData);
            }
            return categoryService.create(formData);
        },
        onSuccess: () => {
            toast.success(`Category ${isEdit ? "updated" : "created"} successfully`);
            navigate(paths.DASHBOARD.CATEGORY.LIST);
        },
        onError: (error) => {
            console.error("Error:", error);
            toast.error(`Failed to ${isEdit ? "update" : "create"} category`);
        },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "" },
    });

    useEffect(() => {
        if (isEdit && data?.data?.item) {
            form.setValue("name", data.data.item.name);
            console.log("data", data.data.item.name);

        }
    }, [isEdit, data, form]);


    async function onSubmit(formData: z.infer<typeof formSchema>) {
        await mutateAsync(formData);
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="p-6 bg-white rounded-md shadow-lg mx-auto">
            <h1 className="text-2xl font-bold text-primary mb-6 text-center">
                {isEdit ? "Edit" : "Create"} Category
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm text-gray-700">Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter category name"
                                            {...field}
                                            className="w-full p-3 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs text-red-600 mt-1" />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex  items-center space-x-1">
                        <Button asChild variant="secondary">
                            <Link to={paths.DASHBOARD.CATEGORY.LIST} className="mr-2 text-sm text-gray-500 hover:text-primary">
                                Back
                            </Link>
                        </Button>
                        <Button type="submit" className="px-6 py-3 text-sm text-white bg-primary rounded-md hover:bg-primary-dark">
                            {isEdit ? "Update" : "Submit"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};


export default CategoryForm;
