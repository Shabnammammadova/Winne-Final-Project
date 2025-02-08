import { paths } from "@/constants/paths"
import wineService from "@/services/wine"
import { Product } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash, } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "sonner"


export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "images",
        header: "Image",
        cell: (data) => {
            return (<img src={data.row.original.images[0]}
                alt={"Rent images"}
                className="w-10 h-10 object-contain rounded-lg" />)
        }
    },
    {
        accessorKey: "category.name",
        header: "Category"
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "discount",
        header: "Discount",
    },
    {
        accessorKey: "",
        header: "Edit",
        cell: (data) => {
            return (
                <div>
                    <Link to={paths.DASHBOARD.WINE.EDIT(data.row.original._id)}>
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

            const { mutate: deleteProduct } = useMutation({
                mutationFn: () => wineService.remove(data.row.original._id),
                onSuccess: () => {
                    toast.success("Wine deleted successfully!");
                    queryClient.invalidateQueries();
                },
                onError: () => {
                    toast.error("Failed to delete wine.");
                },
            });
            return (
                <div onClick={() => deleteProduct()}>
                    <Link to={paths.DASHBOARD.WINE.REMOVE}>
                        <Trash className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },


]
