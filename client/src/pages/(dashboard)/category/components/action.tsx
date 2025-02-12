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
        <div>
            <h1 className="text-2xl font-bold text-primary mb-4 pt-6">
                {isEdit ? "Edit" : "Create"} Category
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Category" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-start mt-4">
                        <Button asChild variant="secondary" className="bg-white">
                            <Link to={paths.DASHBOARD.CATEGORY.LIST} className="mr-2">
                                Back
                            </Link>
                        </Button>
                        <Button type="submit">{isEdit ? "Update" : "Submit"}</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};


export default CategoryForm;
