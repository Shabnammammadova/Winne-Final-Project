import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "@/constants/query-keys"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"
import { columns } from "./column"
import { Spinner } from "@/components/shared/Spinner"
import { DataTable } from "../../wines/list/data-table"
import blogService from "@/services/blog"

const DashboardBlogPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_BLOG],
        queryFn: () => blogService.getAll()
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
                    Blogs
                </h2>
                <Button asChild>
                    <Link to={paths.DASHBOARD.BLOG.CREATE}>Create Blog</Link>
                </Button>
            </div>
            <DataTable columns={columns} data={items} />
        </div>
    )
}

export default DashboardBlogPage