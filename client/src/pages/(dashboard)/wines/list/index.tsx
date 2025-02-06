import { useQuery } from "@tanstack/react-query"

import { DataTable } from "./data-table"
import { QUERY_KEYS } from "@/constants/query-keys"


import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { paths } from "@/constants/paths"
import wineService from "@/services/wine"
import { Spinner } from "@/components/shared/Spinner"
import { columns } from "./column"


const DashboardWinesPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_WINES],
        queryFn: () => wineService.getAll()
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
                    Wines
                </h2>
                <Button asChild>
                    <Link to={paths.DASHBOARD.WINE.CREATE}>Create Wine</Link>
                </Button>
            </div>
            <DataTable columns={columns} data={items} />
        </div>
    )
}

export default DashboardWinesPage