import { Checkbox } from "@/components/ui/checkbox";
import FIlterIcon from "../../../assets/icons/filter.svg";

export const Filter = () => {
    return (
        <div className="container mx-auto w-full max-w-[400px] px-4 sm:px-6 lg:px-8 mt-7">
            <button className="py-[7px] px-5 flex items-center mb-7 bg-transparent border-2 border-black text-black transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white">
                <img src={FIlterIcon} alt="Filter" className="w-[18px] h-[18px]" />
                <p className="ml-2 text-sm sm:text-base">Filter</p>
            </button>
            <div>
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Categories</p>
                    <span className="flex-1 h-[1px] bg-gray-200"></span>
                </div>
                <div className="flex flex-col gap-4">
                    {["Red Wine", "White Wine"].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={category} />
                            <label
                                htmlFor={category}
                                className="text-sm sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Price</p>
                    <span className="flex-1 h-[1px] bg-gray-200"></span>
                </div>
                <div className="flex flex-col gap-4">
                    {["$10-$20", "$20-$30", "$30-$50", "$50-$100", "$100-$200"].map((priceRange) => (
                        <div key={priceRange} className="flex items-center space-x-2">
                            <Checkbox id={priceRange} />
                            <label
                                htmlFor={priceRange}
                                className="text-sm sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {priceRange}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Size</p>
                    <span className="flex-1 h-[1px] bg-gray-200"></span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                            key={size}
                            className="w-[40px] text-center text-sm sm:text-base font-medium border border-black transition-all duration-300 leading-[40px] hover:bg-primary hover:border-primary hover:text-white"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Brand</p>
                    <span className="flex-1 h-[1px] bg-gray-200"></span>
                </div>
                <div className="flex flex-col gap-2">
                    {["Balfour", "Bat Gara", "Castano", "Clos Des Fous", "Font-Mars"].map((brand) => (
                        <button
                            key={brand}
                            className="text-left text-sm sm:text-base font-medium cursor-pointer hover:text-red-800"
                        >
                            {brand}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
