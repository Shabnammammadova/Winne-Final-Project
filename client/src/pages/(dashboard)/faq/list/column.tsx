import { paths } from "@/constants/paths"
import faqService from "@/services/faq"
import { Faq } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { Edit2Icon, Trash } from "lucide-react"
import { Link } from "react-router-dom"
import { toast } from "sonner"



export const columns: ColumnDef<Faq>[] = [
    {
        accessorKey: "question",
        header: "Question",
    },
    {
        accessorKey: "answer",
        header: "Answer",
    },
    {
        accessorKey: "",
        header: "Edit",
        cell: (data) => {
            return (
                <div>
                    <Link to={paths.DASHBOARD.FAQ.EDIT(data.row.original._id)}>
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

            const { mutate: deleteFaq } = useMutation({
                mutationFn: () => faqService.remove(data.row.original._id),
                onSuccess: () => {
                    toast.success("FAQ deleted successfully!");
                    queryClient.invalidateQueries();
                },
                onError: () => {
                    toast.error("Failed to delete FAQ.");
                },
            });
            return (
                <div onClick={() => deleteFaq()}>
                    <Link to={paths.DASHBOARD.FAQ.REMOVE}>
                        <Trash className="w-4 h-4" />
                    </Link>
                </div>
            )
        }
    },

]
