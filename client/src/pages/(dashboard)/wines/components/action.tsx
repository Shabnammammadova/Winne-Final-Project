import { RenderIf } from "@/components/shared/RenderIf";
import { Spinner } from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MAX_FILE_SIZE } from "@/constants";
import { paths } from "@/constants/paths";
import { QUERY_KEYS } from "@/constants/query-keys";
import categoryService from "@/services/category";
import wineService from "@/services/wine";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";


const getformSchema = (isEdit: boolean) => z.object({
    name: z.string().min(2),
    price: z.coerce
        .number({
            invalid_type_error: 'Price must be a number',
            required_error: 'Price is required',
        })
        .positive(),
    discount: z.coerce
        .number({
            invalid_type_error: 'Discount must be a number',
            required_error: 'Discount  is required',
        }),
    categoryId: z.string().min(2, { message: 'Category is required' }),
    images: isEdit ? z.any().optional() :
        z
            .instanceof(FileList, { message: "Images are required" })
            .refine((list) => list.length > 0, "Minimum 1 files required")
            .transform((list) => Array.from(list))
            .refine(
                (files) => {
                    const allowedTypes: { [key: string]: boolean } = {
                        "image/jpeg": true,
                        "image/png": true,
                        "image/webp": true,
                        "application/pdf": true,
                        "application/msword": true,
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                            true,
                    };
                    return Array.from(files).every((file) => allowedTypes[file.type]);
                },
                { message: "Invalid file type. Allowed types: JPG, PNG, PDF, DOC, DOCX,WEBP" }
            )
            .refine(
                (files) => {
                    return Array.from(files).every((file) => file.size <= MAX_FILE_SIZE);
                },
                {
                    message: "File size should not exceed 5MB",
                }
            ),
});


type Props = {
    type: "create" | "update"
}

const ActionForm = ({ type }: Props) => {
    const isEdit = type === "update";
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_WINE_DETAIL],
        queryFn: () => wineService.getById(id!),
        enabled: isEdit
    })

    const editItem = data?.data.item ?? null


    const navigate = useNavigate()
    const { mutateAsync } = useMutation({
        mutationFn: isEdit ? wineService.edit : wineService.create,
        onSuccess: () => {
            navigate(paths.DASHBOARD.WINE.LIST)
        },
        onError: (error) => {
            console.log("error", error);

        }
    })
    const { data: categoryData } = useQuery({
        queryKey: [QUERY_KEYS.CATEGORIES],
        queryFn: categoryService.getAll
    })

    const categoryOptions = useMemo(() => {
        if (!categoryData?.data.items) return [];

        return categoryData.data.items.map((category) => ({
            value: category._id,
            label: category.name
        }))
    }, [categoryData])




    const formSchema = getformSchema(isEdit)

    const form = useForm<z.infer<typeof formSchema>>
        ({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                price: 0,
                discount: 0,
                categoryId: '',
                images: undefined,
            },
        });

    function onSubmit(data: z.infer<typeof formSchema>) {
        const payload = {
            ...data,
            ...(isEdit ? { id } : {})
        }


        const promise = mutateAsync(payload)
        toast.promise(promise, {
            loading: isEdit ? 'Updating wine...' : 'Creating wine...',
            success: isEdit ? 'Wine updated successfully' : 'Wine created successfully',
            error: isEdit ? 'Failed to update wine' : 'Failed to create wine',
        });

    }

    useEffect(() => {
        if (editItem) {
            form.setValue('name', editItem.name)
            form.setValue('price', editItem.price)
            form.setValue('discount', editItem.discount)
            form.setValue('categoryId', editItem.category._id)
        }
    }, [editItem])

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="p-6 bg-white rounded-md shadow-lg mx-auto">
            <h1 className="text-2xl font-bold text-primary mb-6 text-center">
                {isEdit ? "Edit" : "Create"} Wine
            </h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Wine Name" {...field} className="w-full p-3 border rounded-md shadow-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="100"
                                            {...field}
                                            className="w-full p-3 border rounded-md shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="discount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Discount</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="10"
                                            {...field}
                                            className="w-full p-3 border rounded-md shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value} >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categoryOptions.map((category) => (
                                                <SelectItem key={category.value} value={category.value}>
                                                    {category.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="images"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <Input
                                            multiple
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => field.onChange(e.target.files)}
                                            className="w-full p-3 border rounded-md shadow-sm"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {editItem?.images && editItem.images.length > 0 && !form.watch("images")?.length && (
                        <RenderIf condition={!!editItem?.images.length && !form.watch("images")?.length}>
                            <h4 className="mt-6 text-xl font-semibold">Existing Images</h4>
                            <div className="grid grid-cols-3 gap-4 mt-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
                                {editItem.images.map((image: string) => (
                                    <img
                                        key={image}
                                        src={image}
                                        alt="Wine Image"
                                        className="w-full object-contain rounded-lg"
                                    />
                                ))}
                            </div>
                        </RenderIf>
                    )}

                    <div className="flex justify-end mt-6 space-x-4">
                        <Button asChild variant="secondary">
                            <Link to="/dashboard/wines" className="text-sm text-gray-500 hover:text-primary">
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
    )
}



export default ActionForm