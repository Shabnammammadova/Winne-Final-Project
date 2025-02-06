import { paths } from "@/constants/paths"
import { Product } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash, } from "lucide-react"
import { Link } from "react-router-dom"


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
    // {
    //     accessorKey: "description",
    //     header: "Description",
    // },
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
            return (
                <div>
                    <Link to={paths.DASHBOARD.WINE.REMOVE(data.row.original._id)}>
                        <Trash className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },


]
