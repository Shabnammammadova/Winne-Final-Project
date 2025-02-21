import { Checkbox } from "@/components/ui/checkbox";
import categoryService from "@/services/category";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CiFilter } from "react-icons/ci"
import { useTranslation } from "react-i18next";


type Filter = {
    label: string;
    options: {
        value: string;
        label: string;
        count?: number
    }[]
}[];

export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { t } = useTranslation()
    const { data: categoryResponse } = useQuery({
        queryKey: ["categories"],
        queryFn: categoryService.getAll
    })

    const categoryOptions = useMemo(() => {
        if (!categoryResponse) return [];
        return categoryResponse.data.items.map((category) => ({
            value: category._id,
            label: category.name,
            count: category.count
        }))
    }, [categoryResponse])



    const filters: Filter = useMemo(
        () => [
            {
                label: t("Category"),
                options: categoryOptions,
            },
            {
                label: t("Price"),
                options: [
                    {
                        value: "10-20",
                        label: "$10-$20",
                    },
                    {
                        value: "20-30",
                        label: "$20-$30",
                    },
                    {
                        value: "30-50",
                        label: "$30-$50",
                    },
                    {
                        value: "50-100",
                        label: "$50-$100",
                    },
                    {
                        value: "100-200",
                        label: "$100-$200",
                    },
                ]
            },
        ], [categoryOptions])
    function handleChange(type: string, option: string) {
        const params = searchParams.getAll(type.toLowerCase());
        let newParams: string[] = [];
        if (params.includes(String(option))) {
            newParams = params.filter((param) => param !== String(option));
        } else {
            newParams = [...params, String(option)]
        }
        searchParams.delete(type.toLowerCase());
        newParams.forEach((param) => {
            searchParams.append(type.toLowerCase(), param)
        });
        setSearchParams(searchParams)
    }



    return (
        <div className="relative">
            <button
                className="container w-[100px]  absolute left-5 mt-3 bg-primary black flex items-center  gap-y-2 py-2 px-4 font-semibold text-lg transition duration-700 text-white"
            >
                <CiFilter />
                {t("Filter")}
            </button>

            <div className="w-full lg:max-w-[350px] mt-24  px-4 sm:px-6 lg:px-8  flex md:flex-col xs:flex-row xs:items-baseline xs:pr-2 xs:pl-3 border-t border-t-gray-200">
                <div>
                    <div className="flex md:flex-row lg:flex-col  mb-6 gap-2">
                        {
                            filters.map((filter) => (
                                <div key={filter.label}>
                                    <h4 className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase mt-4 mb-6">{filter.label}</h4>
                                    <div className="flex flex-col gap-y-4">
                                        {
                                            filter.options.map((option) => (
                                                <div key={option.value} className="flex items-center space-x-2 mt-">
                                                    <Checkbox id={`${filter.label}-${option.value}`}
                                                        onClick={() => handleChange(filter.label, option.value)}
                                                        defaultChecked={searchParams.getAll(filter.label.toLowerCase()).includes(option.value)}
                                                    />
                                                    <label htmlFor={`${filter.label}-${option.value}`} className="text-sm sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{option.label}{""} </label>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))}
                        <div className="mt-6">
                            <div className="flex items-center mb-6">
                                <p className="pr-4 text-lg sm:text-xl font-medium  tracking-widest uppercase">{t("Brand")}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                {[t("Balfour"),
                                t("Bat Gara"),
                                t("Castano"),
                                t("Clos Des Fous"),
                                t("Font-Mars")].map((brand) => (
                                    <button
                                        key={brand}
                                        className="text-left text-sm sm:text-base font-medium cursor-pointer hover:text-red-800"
                                    >
                                        {brand}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center mb-6">
                                <p className="pr-4 text-lg sm:text-xl font-medium tracking-widest uppercase">{t("Tags")}</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[t("new"),
                                t("trend"),
                                t("hot"),
                                t("wine")].map((tag) => (
                                    <button
                                        key={tag}
                                        className="p-[10px] text-center text-sm sm:text-base font-medium md:m-0 xs:ml-3 border border-black dark:border-white dark:hover:border-primary transition-all duration-300 leading-[40px] hover:bg-primary hover:border-primary hover:text-white"
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
