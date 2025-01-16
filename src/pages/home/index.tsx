import { ProductList } from "@/components/shared/product/ProductList"
import { Cards } from "./components/Cards"
import { Hero } from "./components/Hero"


const HomePage = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <ProductList />
        </div>
    )
}

export default HomePage