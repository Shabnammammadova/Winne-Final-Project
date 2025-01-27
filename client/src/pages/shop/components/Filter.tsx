import { Checkbox } from "@/components/ui/checkbox";


export const Filter = () => {
    return (
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 mt-10 flex md:flex-col xs:flex-row xs:items-baseline xs:pr-2 xs:pl-3">
            <div>
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Categories</p>
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
                </div>
                <div className="flex flex-wrap gap-3">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                            key={size}
                            className="w-[40px] text-center text-sm sm:text-base font-medium md:m-0 xs:ml-3 border border-black transition-all duration-300 leading-[40px] hover:bg-primary hover:border-primary hover:text-white"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <div className="flex items-center mb-6">
                    <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">Brand</p>
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
