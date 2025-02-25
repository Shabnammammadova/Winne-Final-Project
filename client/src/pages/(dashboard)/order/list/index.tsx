import { useQuery } from "@tanstack/react-query"
import { DataTable } from "./data-table"
import { QUERY_KEYS } from "@/constants/query-keys"
import { Spinner } from "@/components/shared/Spinner"
import { columns } from "./column"
import orderService from "@/services/order"


const DashboardOrdersPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_ORDERS],
        queryFn: () => orderService.getAll()
    })

    if (isLoading) {
        return <div className="flex justify-center ">
            <Spinner />
        </div>
    }


    if (isError) {
        return <div>Something went wrong</div>
    }

    const items = data?.data?.items || []
    return (
        <div className="pt-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-primary font-bold text-2xl ">
                    Orders
                </h2>
            </div>
            <DataTable columns={columns} data={items} />
        </div>
    )
}

export default DashboardOrdersPage