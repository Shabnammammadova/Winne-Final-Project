import { ChevronDown, ChevronUp } from "lucide-react"


export const AddToCart = () => {
    return (
        <div>
            <div className="flex items-center gap-5 mt-4">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg shadow-sm p-1 bg-white">
                    <button className="flex items-center justify-center w-8 h-8 transition-all">
                        <ChevronUp className="text-gray-600" />
                    </button>
                    <span className="font-medium text-gray-700 px-4 py-2 rounded-md bg-white">
                        1
                    </span>
                    <button className="flex items-center justify-center w-8 h-8 transition-all">
                        <ChevronDown className="text-gray-600" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-4 mb-4">
                <button className="w-full h-[55px]  text-white bg-primary font-semibold text-sm uppercase hover:bg-black transition-all duration-300">Add to cart</button>
                <button className="w-full h-[55px] mt-5 text-white bg-black font-semibold text-sm uppercase hover:bg-primary transition-all duration-300">Buy it now</button>
            </div>
        </div>
    )
}
