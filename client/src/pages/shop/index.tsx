import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { Filter } from './components/Filter'
import { ShopHero } from './components/Hero'
import { ShopProducts } from './components/Products'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants/query-keys'
import wineService from '@/services/wine'
import { Spinner } from '@/components/shared/Spinner'
import { RenderIf } from '@/components/shared/RenderIf'


const Shop = () => {
    const { data: wineList, isLoading } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })
    const products = wineList?.data.items


    if (isLoading) {
        return (
            <div className="flex flex-col  justify-center items-center mt-28">
                <Spinner />
            </div>
        )
    }

    return (
        <div className='bg-white dark:bg-black dark:text-white border-b border-gray-200'>
            <ShopHero />
            <ScrollToTop />
            <div className='flex lg:flex-row md:flex-col 2xs:flex-col'>
                <Filter />
                <div className='flex xs:flex-col md:flex-col gap-10 container max-w-[1170px]'>

                    <RenderIf condition={isLoading}>
                        {
                            [1, 2, 3, 4].map((index) => (
                                <ShopProducts.Skeleton key={index} />
                            ))
                        }
                    </RenderIf>
                    <RenderIf condition={!isLoading}>
                        <ShopProducts product={products} />
                    </RenderIf>
                </div>
            </div>
        </div>
    )
}

export default Shop