// // import { ReviewStar } from "@/components/shared/ReviewStar"
// import { formatPrice } from "@/lib/utils";
// import { Product } from "@/types";



// type Props = {
//     product: Product;
// }

// export const PaymentSummary = ({ product }: Props) => {
//     const { name, images, price, discount } = product
//     const mainImage = images[0]
//     return (
//         <div className="rounded-[10px] bg-white p-4 lg:p-6 h-fit lg:sticky top-[160px] ">
//             <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary-500 ">Order Summary</h2>
//             <p className="text-secondary-300 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6 "> Prices may vary depending on the selected wine and quantity in your order.</p>
//             <div className="flex items-center gap-x-1">
//                 <img src={mainImage} alt="" className="w-[132px] h-[108px] object-contain" />
//                 <div>
//                     <h2 className="text-xl lg:text-[20px] font-bold text-secondary-500 leading-[150%] tracking-[-0.96px]">
//                         {name}
//                     </h2>
//                 </div>
//             </div>
//             <div className="w-full h-[1px] bg-[#c3d4e966] lg:my-8 my-6" />
//             <div className="flex justify-between items-center">
//                 <div>
//                     <h4 className="text-secondary-500 text-lg lg:text-xl font-bold !leading-[-150%] tracking-[-0.6px]">Total Rental Price</h4>
//                     <p className="text-sm font-medium leading-[150%] tracking-[-0.28px] text-secondary-300">Overall price and includes rental discount</p>
//                 </div>
//                 <p className="text-secondary-500 text-2xl lg:text-[32px] !leading-normal font-bold">{formatPrice(price - discount)}</p>
//             </div>
//         </div>
//     )
// }




import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";

type Props = {
    product: Product;
}

export const PaymentSummary = ({ product }: Props) => {
    const { name, images, price, discount } = product
    const mainImage = images[0]

    // Total price hesablanır
    const totalPrice = price - discount;

    return (
        <div className="rounded-[10px] bg-white p-4 lg:p-6 h-fit lg:sticky top-[160px] ">
            <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary-500 ">Order Summary</h2>
            <p className="text-secondary-300 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6 "> Prices may vary depending on the selected wine and quantity in your order.</p>
            <div className="flex items-center gap-x-1">
                <img src={mainImage} alt="" className="w-[132px] h-[108px] object-contain" />
                <div>
                    <h2 className="text-xl lg:text-[20px] font-bold text-secondary-500 leading-[150%] tracking-[-0.96px]">
                        {name}
                    </h2>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#c3d4e966] lg:my-8 my-6" />
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="text-secondary-500 text-lg lg:text-xl font-bold !leading-[-150%] tracking-[-0.6px]">Total Rental Price</h4>
                    <p className="text-sm font-medium leading-[150%] tracking-[-0.28px] text-secondary-300">Overall price and includes rental discount</p>
                </div>
                <p className="text-secondary-500 text-2xl lg:text-[32px] !leading-normal font-bold">
                    {formatPrice(totalPrice)}  {/* Total price burada göstərilir */}
                </p>
            </div>
        </div>
    );
};
