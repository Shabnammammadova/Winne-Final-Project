import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { Filter } from './components/Filter'
import { ShopHero } from './components/Hero'
import { ShopProducts } from './components/Products'

const Shop = () => {
    return (
        <div className='bg-white border-b border-gray-200 pb-6'>
            <ShopHero />
            <div className='flex xs:flex-col md:flex-row container'>
                <Filter />
                <ShopProducts />
            </div>
            <ScrollToTop />
        </div>
    )
}

export default Shop