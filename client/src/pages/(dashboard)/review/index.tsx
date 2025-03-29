import { useQuery } from "@tanstack/react-query"
import { columns } from "./column"
import { DataTable } from "./data-table"
import { QUERY_KEYS } from "@/constants/query-keys"
import reviewService from "@/services/review"
import { Spinner } from "@/components/shared/Spinner"



const DashboardReviewListPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_REVIEW],
        queryFn: () => reviewService.getAll()
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
    console.log("review items", items);

    return (
        <div className="pt-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-primary font-bold text-2xl ">
                    Reviews
                </h2>
            </div>

            <DataTable columns={columns} data={items} />
        </div>
    )
}

export default DashboardReviewListPage