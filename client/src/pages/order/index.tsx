import { RenderIf } from "@/components/shared/RenderIf";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { QUERY_KEYS } from "@/constants/query-keys"


import reviewService from "@/services/review";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRef, useState } from "react";
import { toast } from "sonner";

//@ts-ignore
import ReactStars from "react-rating-stars-component"
import orderService from "@/services/order";
import { Spinner } from "@/components/shared/Spinner";
import { Order, OrderStatus, Product } from "@/types";
import { calculateDateDifference, formatDate } from "@/lib/utils";

const OrderPage = () => {
    const { data: orderlist, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.ORDERS],
        queryFn: orderService.getAll
    });

    if (isLoading) {
        return (
            <Spinner />
        )
    }

    if (isError) {
        return <div>Error...</div>
    }


    const items = orderlist?.data || []
    console.log("orderitems", items);


    return (
        <div className="container pt-4 lg:pt-8 pb-8 lg:pb-16 flex flex-col gap-y-4 text-center mx-a">
            <h2 className="text-2xl font-semibold text-muted-foreground">
                Your Orders
            </h2>
            {
                items.length ? (
                    items.map((order: Order) => (
                        <OrderCard key={order._id} order={order} />
                    ))
                ) : (
                    <div className="text-center text-lg text-muted-foreground">No order found</div>
                )
            }
        </div>
    )
};

const OrderCard = ({ order }: { order: Order }) => {
    const product = order.product as Product;
    const queryClient = useQueryClient()
    const { mutate, isPending } = useMutation({
        mutationFn: orderService.cancel,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.ORDERS]
            })
        }
    });
    function handleCancelOrder() {
        mutate({ id: order.id })
    }
    const showReview = !order.hasReview && order.status === OrderStatus.Approved && new Date(order.endDate) < new Date()
    return (
        <div className="bg-white shadow-md rounded-lg p-4 relative">
            <div className="flex items-end justify-between">
                <div className="flex items-center">
                    <img src={product.images[0]} alt="" className="w-24 h-24 object-contain rounded-lg" />
                    <div className="ml-4">
                        <div className="flex items-center gap-x-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-xs text-gray-400 translate -y-0.5">
                                {formatDate(order.startDate)} -{""} {formatDate(order.endDate)}
                            </p>
                        </div>

                        <p className="text-muted-foreground">{product.price}
                            <span className="text-sm">{product.currency}</span>x{""}{calculateDateDifference(order.startDate, order.endDate)} days</p>
                    </div>
                </div>
                <div className="absolute right-3 top-3">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <ReservationCardStatus status={order.status} />
                            </TooltipTrigger>
                            <TooltipContent className="capitalize bg-muted-foreground">
                                {order.status}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </div>
                <RenderIf condition={order.status === OrderStatus.Pending}>
                    <div>
                        <Button onClick={handleCancelOrder} disabled={isPending} size="sm" variant={"destructive"}>
                            <RenderIf condition={isPending}>
                                <Spinner />
                            </RenderIf>
                            Cancel Reservation
                        </Button>
                    </div>
                </RenderIf>
            </div>
            <RenderIf condition={showReview}>
                <WriteReview productId={product._id} orderId={order._id} />
            </RenderIf>
        </div>
    )
}


const ReservationCardStatus = ({ status }: { status: OrderStatus }) => {
    switch (status) {
        case OrderStatus.Pending:
            return <span className="bg-yellow-500 w-3 h-3 rounded-full inline-block" />
        case OrderStatus.Approved:
            return <span className="bg-green-500 w-3 h-3 rounded-full inline-block" />
        case OrderStatus.Rejected:
            return <span className="bg-red-500 w-3 h-3 rounded-full inline-block" />
        case OrderStatus.Canceled:
            return <span className="bg-gray-500 w-3 h-3 rounded-full inline-block" />

    }
}

const WriteReview = ({ productId, orderId }: {
    productId: string;
    orderId: string
}) => {
    const [rating, setRating] = useState(1);
    const contentRef = useRef<HTMLTextAreaElement>(null)
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: reviewService.create,
        onSuccess: () => {
            toast.success("Review submitted succesfully.It will be published soon");
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.ORDERS],
            })
        }
    })


    function onSubmitReview() {
        if (!contentRef.current || !contentRef.current.value) {
            return
        };
        mutate({
            rating,
            content: contentRef.current.value,
            productId,
            orderId,
        })


    }
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Write a review</h3>
            <div className="flex flex-col gap-x-4 mt-2">
                <div className="w-fit">
                    <ReactStars
                        count={5}
                        value={rating}
                        onChange={setRating}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <textarea ref={contentRef} placeholder="Write your review here" className="w-full h-24 border border-gray-200 rounded-lg p-2" />
            </div>
            <Button disabled={isPending} onClick={onSubmitReview} size="sm" className="mt-2">
                <RenderIf condition={isPending}>
                    <Spinner />
                </RenderIf>
                Submit Review
            </Button>
        </div>
    )
}

export default OrderPage