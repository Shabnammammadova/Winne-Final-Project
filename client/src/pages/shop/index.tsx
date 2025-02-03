import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { Filter } from './components/Filter'
import { ShopHero } from './components/Hero'
import { ShopProducts } from './components/Products'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants/query-keys'
import wineService from '@/services/wine'

const Shop = () => {
    const { data: wineList } = useQuery({
        queryKey: [QUERY_KEYS.WINE_LIST],
        queryFn: () => wineService.getAll({})
    })
    const products = wineList?.data.items
    return (
        <div className='bg-white border-b border-gray-200 pb-6'>
            <ShopHero />
            <div className='flex xs:flex-col md:flex-row container'>
                <Filter />
                <ShopProducts product={products} />
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Shop