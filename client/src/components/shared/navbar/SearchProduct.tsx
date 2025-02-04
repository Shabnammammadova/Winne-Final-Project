import { Product } from "@/types";
import { useSearchParams } from "react-router-dom";

type Props = {
    product: Product[];
};

export const SearchProduct = ({ product }: Props) => {
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get("search")?.toLowerCase() || "";
    const filteredProducts = searchText
        ? Array.isArray(product)
            ? product.filter((wineproduct) =>
                wineproduct.name.toLowerCase().includes(searchText)
            )
            : []
        : [];

    return (
        <div className={`flex flex-wrap items-start xs:gap-x-10 md:gap-x-20 gap-y-6 pt-6 max-w-[900px] h-auto ${filteredProducts.length === 1 ? 'justify-start items-start text-start relative -left-[22%]' : 'justify-start'
            }`}>
            {filteredProducts.length > 0 && (
                filteredProducts?.map((wineproduct) => (
                    <div key={wineproduct._id} className="flex items-start gap-3 cursor-pointer">
                        <img
                            src={wineproduct.images[0]}
                            alt={wineproduct.name}
                            className="w-[80px] h-[90px] border border-solid"
                        />
                        <div className="flex flex-col">
                            <h3>{wineproduct.name}</h3>
                            <p className="font-semibold text-md text-red-800">${wineproduct.price} USD</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
