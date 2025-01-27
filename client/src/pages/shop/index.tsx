import { Filter } from './components/Filter'
import { ShopHero } from './components/Hero'
import { ShopProducts } from './components/Products'

const Shop = () => {
    return (
        <div className='bg-white border-b border-gray-200 pb-6'>
            <ShopHero />
            <div className='flex container'>
                <Filter />
                <ShopProducts />
            </div>
        </div>
    )
}

export default Shop