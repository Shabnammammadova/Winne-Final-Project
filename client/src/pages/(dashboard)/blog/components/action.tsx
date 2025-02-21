import { RenderIf } from "@/components/shared/RenderIf";
import { Spinner } from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MAX_FILE_SIZE } from "@/constants";
import { paths } from "@/constants/paths";
import { QUERY_KEYS } from "@/constants/query-keys";
import blogService from "@/services/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";


const getformSchema = (isEdit: boolean) => z.object({
    name: z.string().min(2),
    description: z.string().min(10),
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

const BlogForm = ({ type }: Props) => {
    const isEdit = type === "update";
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_BLOG_DETAIL],
        queryFn: () => blogService.getById(id!),
        enabled: isEdit
    })

    const editItem = data?.data.item ?? null


    const navigate = useNavigate()
    const { mutateAsync } = useMutation({
        mutationFn: isEdit ? blogService.edit : blogService.create,
        onSuccess: () => {
            navigate(paths.DASHBOARD.BLOG.LIST)
        },
        onError: (error) => {
            console.log("error", error);

        }
    })





    const formSchema = getformSchema(isEdit)

    const form = useForm<z.infer<typeof formSchema>>
        ({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                description: '',
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
            loading: isEdit ? 'Updating blog...' : 'Creating blog...',
            success: isEdit ? 'Blog updated successfully' : 'Blog created successfully',
            error: isEdit ? 'Failed to update blog' : 'Failed to create blog',
        });

    }

    useEffect(() => {
        if (editItem) {
            form.setValue('name', editItem.name)
            form.setValue('description', editItem.description)

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
                {isEdit ? "Edit" : "Create"} Blog
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
                                        <Input placeholder="Blog Name" {...field} className="w-full p-3 border rounded-md shadow-sm" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Blog Description"
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
                            <Link to="/dashboard/blogs" className="text-sm text-gray-500 hover:text-primary">
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



export default BlogForm