import { ReviewStar } from "@/components/shared/ReviewStar"
import { formatDate } from "@/lib/utils";
import { Review as TReview } from "@/types";
import { User2Icon } from "lucide-react"

type Props = {
    review: TReview | null;
}

export const Review = ({ review }: Props) => {

    if (!review) {
        return (
            <div className="text-center text-lg text-secondary-500 mt-5 border border-b-gray-200 p-3">
                <p className="font-semibold text-2xl">No review found.</p>
            </div>
        );
    }

    const { author, createdAt, rating, content } = review;
    const fullName = author ? `${author.name}` : "Anonymous";

    return (
        <div className="max-w-[800px] mx-auto flex gap-x-4 mt-5">
            <div className="bg-primary rounded-full h-14 w-14 p-3">
                <User2Icon className="w-full h-full text-white" />
            </div>
            <div className="w-full max-w-[1170px]">
                <div className="flex items-center justify-between w-full">
                    <h6 className="text-secondary-500 text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
                        {fullName}
                    </h6>
                    <div className="-translate-y-3">
                        <p className="text-secondary-300 text-sm font-medium leading-[150%] tracking-[-0.28px] text-end mb-2">
                            {formatDate(createdAt, "DD MMM yyyy")}
                        </p>
                        <ReviewStar rating={rating} />
                    </div>
                </div>
                <p className="text-sm font-normal leading-[200%] tracking-[-0.28px] mt-3 text-secondary-300">
                    {content}.
                </p>
            </div>
        </div>
    );
}
