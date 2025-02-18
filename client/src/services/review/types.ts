import { ReviewStatus } from "@/types";

export type CreateReviewRequestPayload = {
    rating: number;
    content: string;
    productId: string;
    orderId: string
}

export type ChangeStatusRequestPayload = {
    id: string;
    status: ReviewStatus.Approved | ReviewStatus.Rejected
}