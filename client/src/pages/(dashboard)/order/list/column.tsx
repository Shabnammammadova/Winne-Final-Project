import { RenderIf } from "@/components/shared/RenderIf";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { QUERY_KEYS } from "@/constants/query-keys";
import { formatDate } from "@/lib/utils";
import orderService from "@/services/order";
import { Order, OrderStatus, Product } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table"
import { CheckCircle2Icon, Edit2Icon, XCircleIcon } from "lucide-react";
import { toast } from "sonner";


export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "status",
        header: "Status",
        cell: (data) => {
            switch (data.row.original.status) {
                case OrderStatus.Approved:
                    return (
                        <div className="text-green-600 capitalize">
                            {data.row.original.status}
                        </div>
                    );
                case OrderStatus.Pending:
                    return (
                        <div className="text-yellow-500 capitalize">
                            {data.row.original.status}
                        </div>
                    );
                case OrderStatus.Rejected:
                    return (
                        <div className="text-red-500 capitalize">
                            {data.row.original.status}
                        </div>
                    );
                case OrderStatus.Canceled:
                    return (
                        <div className="text-red-500 capitalize">
                            {data.row.original.status}
                        </div>
                    )
            }
        }
    },
    {
        accessorKey: "images",
        header: "Image",
        cell: (data) => {
            return (<img src={(data.row.original.product as Product).images[0]}
                alt={"Order images"}
                className="w-10 h-10 object-contain rounded-lg" />)
        }
    },
    {
        accessorKey: "product.name",
        header: "Product Name"
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: (data) => {
            return <div className="text-secondary-500">
                {data.row.original.total} <span className="text-secondary-300">{(data.row.original.product as Product).currency}</span>
            </div>
        }
    },
    {
        accessorKey: "startDate",
        header: "Start Date",
        cell: (data) => {
            return (
                <div className="text-secondary-500">
                    {formatDate(data.row.original.startDate)}
                </div>
            )
        }
    },
    {
        accessorKey: "endDate",
        header: "End  Date",
        cell: (data) => {
            return (
                <div className="text-secondary-500">
                    {formatDate(data.row.original.endDate)}
                </div>
            )
        }
    },
    {
        accessorKey: "",
        header: "Actions",
        cell: (data) => {

            const queryClient = useQueryClient()
            const { mutate } = useMutation(
                {
                    mutationFn: orderService.changeStatus,
                    onSuccess: () => {
                        toast.success("Status updated successfully");
                        queryClient.invalidateQueries({
                            queryKey: [QUERY_KEYS.ADMIN_ORDERS]
                        })
                    }
                }
            )
            const status = data.row.original.status;
            if (status !== OrderStatus.Pending && status !== OrderStatus.Approved) {
                return null
            }
            function handleStatusChange(status: OrderStatus.Approved | OrderStatus.Rejected) {
                mutate({
                    id: data.row.original.id,
                    status
                })
            }
            return (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            <Edit2Icon size={18} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <RenderIf condition={status === OrderStatus.Pending}>
                                <DropdownMenuItem
                                    onClick={() => handleStatusChange(OrderStatus.Approved)} className="cursor-pointer ">
                                    <CheckCircle2Icon className="text-green-500" />
                                    <p className="text-green-500">Approve</p>
                                </DropdownMenuItem>
                                <RenderIf condition={status === OrderStatus.Pending || status === OrderStatus.Approved}>
                                    <DropdownMenuItem onClick={() => handleStatusChange(OrderStatus.Rejected)} className="cursor-pointer outline-none">
                                        <XCircleIcon className="text-red-500" />
                                        <p className="text-green-500">Reject</p>
                                    </DropdownMenuItem>
                                </RenderIf>

                            </RenderIf>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            )
        }
    },


];