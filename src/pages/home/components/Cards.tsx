import CraftBeer from "../../../assets/images/craftbeer.webp"
import OrginalBerr from "../../../assets/images/originalbeer.webp"
import LargerBeer from "../../../assets/images/lagerbeer.webp"
export const Cards = () => {
    return (
        <section id="container"
            className=" container py-[100px] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center items-center gap-y-20 gap-x-14 mt-10 mb-5 font-sans">
            <div className=" bg-white px-[30px] py-[40px] cursor-pointer scale-100 overflow-hidden relative z-10 hover:bg-primary hover:text-black hover:transition-all hover:delay-300 hover:ease-out">
                <img src={OrginalBerr}
                    alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                <div className="px-4 py-3 h-[200px] bg-primary text-center absolute left-0 bottom-0 z-[-1]  w-full">
                    <span className="text-white mr-3  capitalize inline-block text-2xl font-semibold mb-[15px]">New Collection</span>
                    <p className="text-[16px] mb-[30px] leading-6 text-white  block">Food is any substance consumed to provide nutritional support for an organism.</p>
                </div>
            </div>
            <div className=" bg-white px-[30px] py-[40px] cursor-pointer scale-100 overflow-hidden relative z-10 hover:bg-primary hover:text-black hover:transition-all hover:delay-300 hover:ease-out">
                <img src={CraftBeer}
                    alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                <div className="px-4 py-3 h-[200px] bg-primary text-center absolute left-0 bottom-0 z-[-1]  w-full">
                    <span className="text-white mr-3  capitalize inline-block text-2xl font-semibold mb-[15px]">Popular Collection</span>
                    <p className="text-[16px] mb-[30px] leading-6 text-white  block">Food is any substance consumed to provide nutritional support for an organism.</p>
                </div>
            </div>
            <div className=" bg-white px-[30px] py-[40px] cursor-pointer scale-100 overflow-hidden relative z-10 hover:bg-primary hover:text-black hover:transition-all hover:delay-300 hover:ease-out">
                <img src={LargerBeer}
                    alt="Product" className="object-cover rounded-t-xl pb-[100px]" />
                <div className="px-4 py-3 h-[200px] bg-primary text-center absolute left-0 bottom-0 z-[-1]  w-full">
                    <span className="text-white mr-3  capitalize inline-block text-2xl font-semibold mb-[15px]">Best Selling Collection</span>
                    <p className="text-[16px] mb-[30px] leading-6 text-white  block">Food is any substance consumed to provide nutritional support for an organism.</p>
                </div>
            </div>
        </section>
    )
}
