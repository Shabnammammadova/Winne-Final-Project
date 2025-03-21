import StarFilledImg from "../../assets/images/star (1).png"
import StarOutlinedImg from "../../assets/images/yellow-outline.webp"

type Props = {
    rating: number;
}

export const ReviewStar = ({ rating }: Props) => {
    return (
        <div className="flex gap-x-1.5 items-center">{[1, 2, 3, 4, 5].map((star) => {
            if (star <= Math.round(rating)) {
                return <img key={star} src={StarFilledImg} alt="star" className="w-5 h-5" />
            }
            return <img key={star} src={StarOutlinedImg} alt="star" className="w-5 h-5" />
        })}</div>
    )
}
