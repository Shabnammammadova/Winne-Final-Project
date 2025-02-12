import { paths } from "@/constants/paths"
import blogService from "@/services/blog"
import { Blog } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "sonner"



export const columns: ColumnDef<Blog>[] = [
    {
        accessorKey: "images",
        header: "Image",
        cell: (data) => {
            return (<img src={data.row.original.images[0]}
                alt={"Blog images"}
                className="w-20 h-20 object-contain rounded-lg" />)
        }
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "",
        header: "Edit",
        cell: (data) => {
            return (
                <div>
                    <Link to={paths.DASHBOARD.BLOG.EDIT(data.row.original._id)}>
                        <Edit2Icon className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },
    {
        accessorKey: "",
        header: "Remove",
        cell: (data) => {
            const queryClient = useQueryClient();

            const { mutate: deleteBlog } = useMutation({
                mutationFn: () => blogService.remove(data.row.original._id),
                onSuccess: () => {
                    toast.success("Blog deleted successfully!");
                    queryClient.invalidateQueries();
                },
                onError: () => {
                    toast.error("Failed to delete blog.");
                },
            });
            return (
                <div onClick={() => deleteBlog()}>
                    <Link to={paths.DASHBOARD.BLOG.REMOVE}>
                        <Trash className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },

]
