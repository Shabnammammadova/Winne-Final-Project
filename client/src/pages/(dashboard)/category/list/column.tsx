import { paths } from "@/constants/paths"
import categoryService from "@/services/category"
import { Category } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "sonner"



export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "",
        header: "Edit",
        cell: (data) => {
            return (
                <div>
                    <Link to={paths.DASHBOARD.CATEGORY.EDIT(data.row.original._id)}>
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

            const { mutate: deleteCategory } = useMutation({
                mutationFn: () => categoryService.remove(data.row.original._id),
                onSuccess: () => {
                    toast.success("Category deleted successfully!");
                    queryClient.invalidateQueries();
                },
                onError: () => {
                    toast.error("Failed to delete category.");
                },
            });
            return (
                <div onClick={() => deleteCategory()}>
                    <Link to={paths.DASHBOARD.CATEGORY.REMOVE}>
                        <Trash className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },

]
