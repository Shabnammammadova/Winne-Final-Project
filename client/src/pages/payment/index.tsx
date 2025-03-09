import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import wineService from "@/services/wine";
import { Spinner } from "@/components/shared/Spinner";
import Payment from "./components/Payment";
import { PaymentSummary } from "./components/Summary";


const PaymentPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.WINE_DETAIL, id],
        queryFn: () => wineService.getById(id!)
    })


    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }
    const product = data?.data.item
    console.log("Product", product);


    if (isError || !product) {
        return (
            <div className="flex flex-col justify-center items-center mt-28">
                <p className="text-2xl font-bold mb-3 text-primary">Something went wrong!</p>
                <Button className="mt-4 mb-8">
                    <Link to={paths.HOME}>
                        Go back to home
                    </Link></Button>
            </div>
        )
    }

    return (
        <div className="container py-6  lg:py-8 grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_492px] lg:gap-x-8 gap-y-8">
            <Payment />
            <PaymentSummary product={product} />
        </div>
    )
}

export default PaymentPage