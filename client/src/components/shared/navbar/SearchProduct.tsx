import { Product } from "@/types";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";

type Props = {
    product: Product[];
};

export const SearchProduct = ({ product }: Props) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const { t } = useTranslation()
    const searchText = searchParams.get("search")?.toLowerCase() || "";
    const filteredProducts = searchText
        ? Array.isArray(product)
            ? product.filter((wineproduct) =>
                wineproduct.name.toLowerCase().includes(searchText)
            )
            : []
        : [];

    return (
        <div
            className={`grid grid-cols-2 gap-y-1 pt-6 max-w-[600px] mx-auto ${filteredProducts.length > 1
                ? "justify-start max-h-[100px] overflow-y-auto"
                : "justify-start items-start text-start relative"
                }`}
        >

            {filteredProducts.length > 0 && (
                filteredProducts?.map((wineproduct) => (
                    <div key={wineproduct._id} className="flex items-start gap-3 cursor-pointer" onClick={() => navigate(`/wine/detail/${wineproduct._id}`)}>
                        <img
                            src={wineproduct.images[0]}
                            alt={wineproduct.name}
                            className="w-[50px] h-[70px] border border-solid"
                        />
                        <div className="flex flex-col">
                            <h3 className="capitalize">{t(`products.${wineproduct.name.replace(/\s+/g, "_").toLowerCase()}`)}</h3>
                            <div className="flex items-center gap-1">
                                <p className="text-[15px] font-bold text-gray-500 line-through">
                                    {wineproduct.discount ? `$${wineproduct.price}` : null}
                                </p>
                                <p className="text-[15px] font-bold text-red-800">
                                    ${wineproduct.discount ? wineproduct.price - wineproduct.discount : wineproduct.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
